# StarmanSat website

Static marketing site for Starman Satellite LLC, built with [Astro](https://astro.build). Brand: Starman Aurora palette and Hanken Grotesk (OFL, self-hosted in `public/fonts`).

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs dist/ (deploy this folder to any static host)
npm run check     # after build: fails on broken internal links
```

## Where things live

| What | Where |
|---|---|
| Company facts, services, industries, solutions, team, nav | `src/data/site.ts` |
| Articles | `src/content/blog/*.md` |
| Example engagements | `src/content/case-studies/*.md` |
| Colors, type scale, shared styles | `src/styles/global.css` |
| Home page ground-track hero | `src/components/GroundTrack.astro` |

Adding a service, industry or solution to `site.ts` creates its page, menu entry and footer link automatically.

## Contact form: Google Forms setup

The site keeps its own form and posts submissions to a Google Form in the StarmanSat Workspace.

**Quickest:** run `scripts/create-contact-form.gs` once at https://script.google.com (signed in to the StarmanSat Workspace). It creates the form and a responses Sheet in My Drive → Forms and prints the `googleForm` block for `src/data/site.ts`. The manual steps below do the same by hand.

1. In Google Forms, create a form with five questions, all **Short answer** except Message (**Paragraph**): Name, Email, Organization, Topic, Message. Don't mark any as required (the site validates).
2. **Settings > Responses:** turn **off** "Restrict to users in StarmanSat and its trusted organizations" (otherwise outside visitors can't submit), and set "Collect email addresses" to **Do not collect**.
3. **Responses tab:** link to a Google Sheet, and turn on email notifications for new responses if you want them.
4. **⋮ > Get pre-filled link:** type `x` in every field, click **Get link**, and copy it. It contains `entry.123456789=x` for each field, in question order.
5. Put the form ID (the part after `/forms/d/e/` in that link) and the five entry IDs in `googleForm` in `src/data/site.ts`, then rebuild.

Google doesn't let a website read its reply, so the site shows "sent" once the request goes out and only reports network failures. Check the first few submissions arrive in the Sheet.

## Before launch

- [ ] Confirm the domain in `astro.config.mjs` (`site`) and the email addresses in `src/data/site.ts`.
- [ ] Contact form: connect the Google Form (below). Until then the form opens the visitor's email app.
- [ ] Add the LinkedIn URL in `src/data/site.ts` to show it in the footer.
- [ ] Review the copy, especially the commitments: "reply within one business day" (contact page) and the hiring timeline (careers page).
- [ ] Replace the example engagements with real, client-approved case studies when you have them. They are labeled as examples on the site.
- [ ] Privacy policy (`src/pages/privacy-policy.astro`) is the starman-website policy with the GDPR sections replaced by Argentine Law 25,326. Set `privacy` in `src/data/site.ts`: effective date, state of formation, and `privacy.argentina`. The policy mentions a cookie banner and a "Cookie Settings" footer link: this site sets no cookies, so either add them when you add analytics, or have counsel adjust section 4.
- [ ] Have counsel review `src/pages/terms.astro`.
- [ ] Add team photos and bios if wanted (the leadership blocks currently show initials).
