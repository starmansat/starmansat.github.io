// Single source for company facts and page content. Edit copy here, not in templates.

export const company = {
  name: 'StarmanSat',
  legalName: 'Starman Satellite LLC',
  tagline: 'Space operations and space-data engineering',
  description:
    'StarmanSat helps satellite operators fly safely, run lean mission operations, and turn telemetry and imagery into decisions.',
  address: { street: '1014 W 36th St', city: 'Baltimore', region: 'MD', postal: '21211', country: 'US' },
  // Hampden, Baltimore. Used by the ground-track plot on the home page.
  location: { lat: 39.3311, lon: -76.6328 },
  email: 'hello@starmansat.com', // TODO: confirm mailbox
  careersEmail: 'careers@starmansat.com', // TODO: confirm mailbox
  privacyEmail: 'privacy@starmansat.com', // TODO: confirm mailbox
  linkedin: '', // TODO: add LinkedIn company URL to show the footer link

  // Contact form -> Google Form in our Workspace. Leave `id` empty and the form opens the visitor's email app instead.
  // Setup (see README): id is the part after /forms/d/e/ in the form's "Send > link" URL; entry IDs come from
  // "Get pre-filled link". Every question should be Short answer or Paragraph so any value is accepted.
  googleForm: {
    // "StarmanSat website contact" in the StarmanSat Workspace (My Drive → Forms).
    id: '1FAIpQLSfVO6hqEQtAuXlXdIHHINyg1U2MDIm_VNcbUP_ZsjjszhofxQ',
    fields: { name: 'entry.1351182477', email: 'entry.345459869', organization: 'entry.631162255', topic: 'entry.2024861861', message: 'entry.1023716637' },
  },

  // Privacy policy facts that differ per company.
  privacy: {
    effectiveDate: 'November 22, 2026', // TODO: set to launch date
    formation: '', // e.g. 'a Maryland limited liability company'. Shown in the operator statement when set.
    // Argentine entity: controller for data collected in Argentina (Law 25,326).
    argentina: {
      legalName: 'Starman Satellite Argentina SRL',
      address: 'Montevideo 1454, S2000BSD Rosario, Santa Fe, Argentina', // domicilio legal
      cuit: '30-60854384-4',
      // Registro Nacional de Bases de Datos (AAIP) registration number. Shown only when set — don't claim it before it exists.
      databaseRegistration: 'RL-2021-52262517-APN-DNPDP#AAIP',
    },
  },
};

export type Item = { slug: string; title: string; summary: string; body: string[]; points: string[] };

export const services: Item[] = [
  {
    slug: 'mission-operations',
    title: 'Mission and constellation operations',
    summary: 'Operators, procedures and on-call coverage for one spacecraft or a growing fleet.',
    body: [
      'We plug into your operations team as console operators, backroom engineers or a full shift rotation. We run passes, work anomalies, and keep the procedures current while we do it.',
      'As your constellation grows, we help you move from people watching screens to people supervising automation: scripted pass plans, alert routing, and handovers that survive a 3 a.m. phone call.',
    ],
    points: [
      'Console and backroom support, including nights and weekends',
      'Anomaly response and root-cause reports',
      'Pass plan automation and alert routing',
      'Shift handover and on-call design',
    ],
  },
  {
    slug: 'flight-dynamics',
    title: 'Flight dynamics and collision avoidance',
    summary: 'Orbit determination, maneuver planning and conjunction screening you can audit.',
    body: [
      'We build and run the flight dynamics chain: orbit determination from GPS or ranging, high-accuracy propagation, ephemeris and TLE generation, and pass prediction for your ground network and targets.',
      'For collision avoidance, we screen conjunction data messages, trend risk over time, and plan, execute and reconstruct avoidance maneuvers with a paper trail your insurers and regulators can follow.',
    ],
    points: [
      'Orbit determination (batch least squares, extended Kalman filter)',
      'Maneuver planning, execution support and reconstruction',
      'Conjunction screening and risk trending',
      'Ephemeris, TLE and pass products for operations',
    ],
  },
  {
    slug: 'ground-segment',
    title: 'Ground segment and mission control',
    summary: 'Mission control software, command and telemetry databases, and ground station integration.',
    body: [
      'We stand up mission control on open, proven frameworks such as Yamcs, define your command and telemetry database, and connect it to the ground stations and networks you already contract.',
      'You get displays operators actually use, archives you can query, and an interface the rest of your software can build on.',
    ],
    points: [
      'Mission control deployment and configuration',
      'Command and telemetry database design (XTCE)',
      'Ground station and network integration',
      'Contact scheduling and pass automation',
    ],
  },
  {
    slug: 'flight-software',
    title: 'Flight software and embedded systems',
    summary: 'Reproducible embedded Linux builds and test rigs for the code that flies.',
    body: [
      'We set up flight software builds that produce the same image every time, emulation and hardware-in-the-loop rigs that catch problems before integration, and release processes that make uploading new code a routine event.',
    ],
    points: [
      'Embedded Linux images (Buildroot)',
      'Emulation and hardware-in-the-loop test rigs',
      'Continuous integration for flight code',
      'On-orbit software update procedures',
    ],
  },
  {
    slug: 'space-data-engineering',
    title: 'Space data engineering',
    summary: 'Pipelines that land telemetry, imagery and operations data in one queryable place.',
    body: [
      'Most operators have telemetry in one archive, imagery in a bucket, and the schedule in a spreadsheet. We build the pipelines and the lakehouse that bring them together, so engineering, operations and customers work from the same numbers.',
    ],
    points: [
      'Telemetry and imagery ingestion pipelines',
      'Lakehouse design on Databricks',
      'Workflow orchestration with Airflow',
      'Data quality checks and lineage',
    ],
  },
  {
    slug: 'geospatial-ai',
    title: 'Geospatial AI',
    summary: 'Models that find, count and track things in satellite imagery, and the platform to run them.',
    body: [
      'We train and deploy detection, segmentation and change-detection models on optical and SAR imagery, then wire them into monitoring workflows such as site activity, infrastructure change or vessel tracking.',
      'We also build the platform underneath: training on GPUs, experiment tracking, model registries and monitoring, so your models keep improving after we leave.',
    ],
    points: [
      'Object detection, segmentation and change detection',
      'Site and activity monitoring workflows',
      'Training and serving platforms (MLOps)',
      'Model evaluation against ground truth',
    ],
  },
  {
    slug: 'readiness-and-training',
    title: 'Operations readiness and training',
    summary: 'Procedures, rehearsals and training so your team is ready before launch day.',
    body: [
      'We review your concept of operations, write and test the procedures, and run rehearsals until your team can work any nominal or contingency scenario from the procedure alone.',
    ],
    points: [
      'Operations readiness reviews',
      'Standard operating procedures (SOPs)',
      'Launch and early-operations rehearsals',
      'Operator certification programs',
    ],
  },
];

export const industries: Item[] = [
  {
    slug: 'earth-observation',
    title: 'Earth observation',
    summary: 'Imaging constellations that need high tasking throughput and fast delivery.',
    body: ['Imaging operators win on how many good images they collect and how quickly customers get them. We work on both ends: the operations and flight dynamics that keep collection high, and the pipelines and models that turn pixels into answers.'],
    points: ['Tasking and collection planning', 'Image processing pipelines', 'Analytics products on top of imagery'],
  },
  {
    slug: 'satellite-communications',
    title: 'Satellite communications',
    summary: 'Communications fleets that need high availability and careful orbit management.',
    body: ['Communications operators sell availability. We help with the operations automation, station-keeping and conjunction workload that come with large fleets.'],
    points: ['Fleet operations automation', 'Station-keeping and collision avoidance', 'Payload and network telemetry analytics'],
  },
  {
    slug: 'defense-and-national-security',
    title: 'Defense and national security',
    summary: 'Programs that need commercial speed with mission assurance.',
    body: ['We support programs that buy commercial space capability, bringing operations discipline, traceable flight dynamics and data engineering that fits government environments.'],
    points: ['Mission assurance and readiness reviews', 'Space domain awareness data', 'Commercial imagery integration'],
  },
  {
    slug: 'civil-and-government-space',
    title: 'Civil and government space',
    summary: 'Science and civil missions with long lifetimes and public accountability.',
    body: ['Long missions outlast their original teams. We document, automate and modernize ground systems so missions keep operating safely as people and technology change.'],
    points: ['Ground system modernization', 'Procedure capture and documentation', 'Archive and data access'],
  },
  {
    slug: 'new-space',
    title: 'New space companies',
    summary: 'Startups going from first satellite to first constellation.',
    body: ['Your first satellite is a project; your tenth is an operation. We help early teams build the operations, ground software and data foundations that scale, without hiring a full department first.'],
    points: ['First-launch readiness', 'Ground segment stand-up', 'Operations that scale with the fleet'],
  },
  {
    slug: 'energy-climate-agriculture',
    title: 'Energy, climate and agriculture',
    summary: 'Organizations that use satellite data to monitor assets, land and emissions.',
    body: ['If you buy satellite data rather than fly satellites, we help you get value from it: choosing data sources, building monitoring pipelines, and training models for your assets and regions.'],
    points: ['Asset and land monitoring', 'Data source selection', 'Models tuned to your sites'],
  },
];

export const solutions: Item[] = [
  {
    slug: 'launch-to-ops-readiness',
    title: 'Launch-to-ops readiness',
    summary: 'A fixed-scope program that takes your team from launch contract to confident first passes.',
    body: ['We review your concept of operations, close the gaps in procedures and tooling, and rehearse launch and early operations with your team until the timeline runs clean.'],
    points: ['Readiness review with a prioritized gap list', 'Procedures for launch and early operations', 'Two full rehearsals with your team'],
  },
  {
    slug: 'conjunction-watch',
    title: 'Conjunction watch',
    summary: 'Ongoing conjunction screening, risk trending and maneuver recommendations for your fleet.',
    body: ['We screen every conjunction data message for your spacecraft, tell you which ones matter, and hand you a maneuver plan when one is needed, with the analysis attached.'],
    points: ['Daily screening and risk trending', 'Escalation when thresholds are crossed', 'Maneuver plans with supporting analysis'],
  },
  {
    slug: 'mission-control-quickstart',
    title: 'Mission control quickstart',
    summary: 'A working mission control system for your spacecraft, built on open-source Yamcs.',
    body: ['We deliver a configured mission control system with your command and telemetry database, operator displays and ground station links, plus the training to run and extend it yourself.'],
    points: ['Configured Yamcs deployment', 'Command and telemetry database', 'Displays, archive and operator training'],
  },
  {
    slug: 'constellation-health-check',
    title: 'Constellation health check',
    summary: 'A short assessment of your operations, tooling and data, with a ranked list of fixes.',
    body: ['We spend time with your operators and engineers, review your tooling and data, and give you a ranked list of the changes that will reduce risk and workload the most.'],
    points: ['Interviews and shadowed operations shifts', 'Tooling and data review', 'Ranked recommendations with effort estimates'],
  },
];

export const process = [
  { title: 'Assess', text: 'We learn your mission, shadow your team, and agree on what success looks like.' },
  { title: 'Build', text: 'We deliver working software, procedures and pipelines in short, reviewed increments.' },
  { title: 'Operate', text: 'We run it alongside your team in real operations until it is routine.' },
  { title: 'Hand over', text: 'Your team owns it, with documentation and training, or we keep running it for you.' },
];

export const team = [
  { name: 'Trevor Goodchild', role: 'Chief Executive Officer and Founder' },
  { name: 'Max Barrios', role: 'Chief Operating Officer and Co-Founder' },
  { name: 'Alex Barreto', role: 'Chief Technology Officer' },
];

// Tools we build with. Factual capability list, not client logos.
export const stack = ['Yamcs', 'XTCE', 'Databricks', 'Apache Airflow', 'Python', 'PyTorch', 'Kubernetes', 'Buildroot', 'AWS', 'Orekit'];

export const nav = [
  { label: 'Services', href: '/services/', children: services.map((s) => ({ label: s.title, href: `/services/${s.slug}/` })) },
  { label: 'Industries', href: '/industries/', children: industries.map((s) => ({ label: s.title, href: `/industries/${s.slug}/` })) },
  { label: 'Solutions', href: '/solutions/', children: solutions.map((s) => ({ label: s.title, href: `/solutions/${s.slug}/` })) },
  { label: 'Insights', href: '/insights/' },
  { label: 'About', href: '/about/' },
  { label: 'Careers', href: '/careers/' },
];
