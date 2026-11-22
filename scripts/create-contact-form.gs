/**
 * Creates the website contact Google Form in the StarmanSat Workspace.
 *
 * Run once: open https://script.google.com signed in as your @starmansat.com account,
 * New project → paste this file → Run `createContactForm` → approve the permissions.
 * The execution log prints the `googleForm` block to paste into src/data/site.ts.
 *
 * Every question is optional short answer (Message is paragraph) so Google accepts whatever
 * the website sends; the website itself validates required fields and the consent checkbox.
 */
function createContactForm() {
  const form = FormApp.create('StarmanSat website contact');
  form
    .setDescription('Submissions from the contact form on starmansat.github.io. See https://starmansat.github.io/privacy-policy/.')
    .setCollectEmail(false)
    .setAllowResponseEdits(false)
    .setLimitOneResponsePerUser(false)
    .setConfirmationMessage('Thanks. We reply within one business day.');
  // Off = people outside the StarmanSat Workspace (i.e. website visitors) can submit.
  form.setRequireLogin(false);
  // Forms made by script are unpublished by default since 2025; publish so the site can post to it.
  if (typeof form.setPublished === 'function') form.setPublished(true);

  const fields = {
    name: form.addTextItem().setTitle('Name'),
    email: form.addTextItem().setTitle('Email'),
    organization: form.addTextItem().setTitle('Organization'),
    topic: form.addTextItem().setTitle('Topic'),
    message: form.addParagraphTextItem().setTitle('Message'),
  };

  // Responses also land in a Sheet next to the form.
  const sheet = SpreadsheetApp.create('StarmanSat website contact (responses)');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());

  // File both into My Drive → Forms (created if missing).
  const existing = DriveApp.getRootFolder().getFoldersByName('Forms');
  const folder = existing.hasNext() ? existing.next() : DriveApp.getRootFolder().createFolder('Forms');
  DriveApp.getFileById(form.getId()).moveTo(folder);
  DriveApp.getFileById(sheet.getId()).moveTo(folder);

  // The entry.N names the website must post: read them off one pre-filled URL per question.
  const entries = {};
  Object.keys(fields).forEach(function (key) {
    const item = fields[key];
    const answer = item.getType() === FormApp.ItemType.PARAGRAPH_TEXT
      ? item.asParagraphTextItem().createResponse('x')
      : item.asTextItem().createResponse('x');
    const url = form.createResponse().withItemResponse(answer).toPrefilledUrl();
    entries[key] = url.match(/entry\.\d+/)[0];
  });

  const publicId = form.getPublishedUrl().match(/\/forms\/d\/e\/([^/]+)\//)[1];
  Logger.log('Form editor: ' + form.getEditUrl());
  Logger.log('Responses sheet: ' + sheet.getUrl());
  Logger.log('Paste into src/data/site.ts:\n\n  googleForm: {\n    id: \'' + publicId + '\',\n    fields: ' +
    JSON.stringify(entries).replace(/"(\w+)":/g, '$1: ').replace(/"/g, "'").replace(/,/g, ', ') + ',\n  },');
}
