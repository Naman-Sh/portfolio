/* ==========================================================
   EDIT THIS FILE to change the site's content.
   - SITE: your name and email
   - SUTRAS: the six sutras (shared across the site)
   - PROJECTS: up to 10 projects. Set show:false to hide one.
   Anything in [square brackets] is a placeholder to replace.
   ========================================================== */

window.SITE = {
  name: 'Naman Sharma',
  email: 'namansharma.iitr@gmail.com'
};

/* Two-level colour: the project's TYPE picks the colour family, and each project in
   that family gets the next shade, in display order. Edit the hex values to taste.
   Types are matched by keyword: "award"/"competition" -> award, "talk"/"presentation"/
   "publication" -> talk, "academic" -> academic, anything else -> work.
   Add family: 'work' | 'academic' | 'award' | 'talk' to a project to override. */
window.FAMILIES = {
  work:     { label: 'Work',                 shades: ['#C6F432', '#A8EC4F', '#8BE36A', '#E4F76E', '#6FD98A', '#B5E27C'] },
  academic: { label: 'Academic',             shades: ['#6CC4FF', '#8FA8FF', '#4FB0F0', '#A9C7FF', '#7BD0E8', '#9DB4FF'] },
  award:    { label: 'Award / competition',  shades: ['#FFB547', '#FFC96B', '#FF9F5A', '#FFD98A', '#F5A83A', '#FFB27D'] },
  talk:     { label: 'Talk / publication',   shades: ['#B49CFF', '#D98BF0', '#F78FC6', '#C7A8FF', '#E8A0E0', '#A98BF5'] }
};

window.SUTRAS = [
  { name: 'People first',        myth: 'Get the technology right and everything else will follow.',        sutra: 'People, processes, technology, in that order.' },
  { name: 'Know your users',     myth: 'Build the solution and all users will find their way.',            sutra: 'Distinguish your users and map their needs, individually.' },
  { name: 'Small experiments',   myth: 'We can\u2019t afford to experiment. It\u2019s too risky.',          sutra: 'Build small versions. Break them before shipping.' },
  { name: 'Learn while doing',   myth: 'Design it right with the experts, then leave it to God.',          sutra: 'Learning while doing is the only design process that works.' },
  { name: 'Adaptive leadership', myth: 'Technical skills and motivation are enough to drive change.',      sutra: 'Technical skills without adaptive leadership is motion without progress.' },
  { name: 'Ownership',           myth: 'Perfect it, secure buy-in, and push it to scale.',                 sutra: 'Sow ideas early, nurture patiently, let ownership grow.' }
];

/* ---------- PROJECTS ----------
   scores: depth each sutra shaped the project, 0 to 4, in sutra order (01 to 06).
           These are illustrative placeholders. Replace with your own ratings.
   beats:  the one or two moments a sutra changed the course. sutra = 1 to 6.
   images: leave src empty to show a labelled placeholder.
           Put files in assets/images/ and use e.g. src: 'assets/images/dashboard.jpg'
*/
(function () {
  var ph = function (alt) { return { src: '', alt: alt, caption: '' }; };
  var blank = function (n, type, title, slug, scores, beats) {
    return {
      slug: slug, order: n, show: true, type: type, title: title,
      year: '[Year]',
      summary: '[One-sentence summary of the project and what changed.]',
      role: '[Your role]', when: '[Dates]', where: '[City / agency]', team: '[Who you worked with]',
      metrics: [
        { value: '[#]', label: '[Metric one]' },
        { value: '[#]', label: '[Metric two]' },
        { value: '[#]', label: '[Metric three]' },
        { value: '[#]', label: '[Metric four]' }
      ],
      homeNote: '[One line on the method.]',
      problem: '[What was broken: who was affected, what the old process looked like, and what it cost.]',
      approach: ['[Method: how it was designed and tested. Two or three short paragraphs.]'],
      output: '[Output: what it left behind, and who runs it now.]',
      scores: scores,
      beats: beats,
      images: {
        hero: ph('Hero image'),
        approach: [ph('Before'), ph('After')],
        output: ph('Output')
      }
    };
  };

  var P = [];

  P.push({
    slug: 'property-disposition', order: 1, show: true, type: 'Work',
    title: 'Reforming the City-Owned Property Sales Program',
    year: 'Jul 2024 \u2013 present',
    org: 'City of Trenton, via the Bloomberg Center for Cities at Harvard University',
    position: 'Innovation Lead, Office of the Mayor',
    summary: 'Converted an ad hoc property disposition program into a repeatable, rules-based engine for neighborhood redevelopment, building the city\u2019s innovation capability from the ground up.',
    role: 'Project Lead', when: 'Jul 2024 \u2013 present', where: 'Trenton, NJ', team: 'Partner: Real Estate division',
    context: 'Trenton has 91,500 residents and a $280 million annual operating budget. As a municipal government, it had no dedicated data or innovation officer.',
    scope: [
      'Vacant property disposition for neighborhood redevelopment',
      'Redevelopment compliance',
      'Land bank feasibility',
      'AI technology procurement',
      'Innovation grants',
      'University partnerships'
    ],
    metrics: [
      { value: '12x',  label: 'Growth in annual city-owned property sales' },
      { value: '150+', label: 'Properties sold since January 2026, up from about 12 a year' },
      { value: '580',  label: 'Applications in one month, versus 400 over the prior five-month cycle' },
      { value: '$75K', label: 'Saved annually on application intake and processing' }
    ],
    homeNote: 'A four-pillar framework (Data, Processes, Applications, Governance) turned discretionary sales into a rules-based engine.',
    problem: 'City-owned property sales ran on ad hoc decisions: about 12 sales a year, 400 applications over a five-month cycle, and discretionary calls on who got what. With no data or innovation officer, there was no system to fix it.',
    approach: [
      'I led a redesign of the sales program around four pillars: Data, Processes, Applications and Governance.',
      'Before buying anything, I validated user needs with personas, process maps and need-feature matrices, then tested no-cost minimum viable products (MVPs). That saved $75K annually on application intake and processing.',
      'Multi-stakeholder workshops produced the process maps and a standard operating procedure (SOP) with transparent pricing and applicant-priority rubrics, replacing discretionary decisions with rules-based criteria.'
    ],
    output: 'A repeatable, rules-based property disposition engine: a centralized geospatial data platform, automated processes, and an SOP with transparent pricing and applicant-priority rubrics. It also built the city\u2019s innovation capability from the ground up.',
    tools: ['Geospatial property data platform', 'Process mapping', 'User personas', 'Agile prototyping', 'Geospatial analysis', 'Generative AI', 'Dashboards'],
    scores: [3, 4, 4, 3, 3, 3],
    beats: [
      { sutra: 2, change: 'Built personas, process maps and need-feature matrices to validate user needs before designing anything.' },
      { sutra: 3, change: 'Tested no-cost MVPs before any purchase, saving $75K annually on application intake and processing.' }
    ],
    images: {
      hero: ph('Hero: map of properties sold, or the property sales dashboard'),
      approach: [ph('The old, ad hoc process'), ph('The new rules-based process map')],
      output: ph('Dashboard or standard operating procedure')
    }
  });

  P.push({
    slug: 'riverside-homelessness-framework', order: 3, show: true, type: 'Work',
    title: 'Data-Driven Assessment Framework for Homelessness Reduction',
    year: 'Jun \u2013 Aug 2023',
    org: 'City of Riverside, via the Bloomberg Center for Cities at Harvard University',
    position: 'Bloomberg Harvard Summer Fellow, Office of the Mayor',
    summary: 'Established an outcome-based measurement framework for the city\u2019s homelessness response, and taught staff to distinguish outputs from outcomes, shifting the organization from tracking activity to managing impact.',
    role: 'Lead', when: 'Jun \u2013 Aug 2023', where: 'Riverside, CA', team: 'Stakeholders: Mayor, Council, Police, Homelessness Task Force',
    context: 'Riverside has 325,000 residents and a $306 million annual operating budget. Its homelessness strategy had ambiguous outcome metrics.',
    scope: ['Homelessness Action Plan performance management', 'Municipal data governance'],
    metrics: [
      { value: '3',    label: 'Amendments to the city\u2019s Strategic Plan to overhaul municipal data governance' },
      { value: '100+', label: 'City officials and residents reached through executive presentations' },
      { value: '1',    label: 'Chief Data Officer role proposed, to scale data governance across city hall' },
      { value: '3',    label: 'Frameworks taught to the Mayor\u2019s Office leadership team: PDIA, Theory of Change, Public Value' }
    ],
    homeNote: 'An outcome-based KPI framework and data governance reforms for the Homelessness Action Plan.',
    problem: 'Riverside\u2019s homelessness strategy had ambiguous outcome metrics, so the city tracked activity rather than impact. Without strong data governance, it was hard to say what was working.',
    approach: [
      'I led three amendments to the city\u2019s Strategic Plan to overhaul municipal data governance, winning buy-in through executive presentations to the Mayor, Council, and 100+ city officials and residents.',
      'I formulated a key performance indicator (KPI) framework with definitions, formulas and benchmarks drawn from peer California action plans, so the Homelessness Action Plan could be measured objectively. To ground it in evidence, I rode along with Police and Homelessness Task Force members to see street conditions firsthand and identify service-delivery challenges.',
      'To make it last, I built a business case for a Chief Data Officer role and negotiated it across departments, and ran workshops on Problem-Driven Iterative Adaptation (PDIA), Theory of Change and the Public Value Framework for the Mayor\u2019s Office leadership team.'
    ],
    output: 'An outcome-based measurement framework for the city\u2019s homelessness response, three Strategic Plan amendments on data governance, a proposed Chief Data Officer role, and a leadership team trained to tell outputs from outcomes.',
    tools: ['Comparative analysis', 'Policy writing', 'KPI design', 'Stakeholder interviews', 'PDIA', 'Theory of change'],
    scores: [3, 4, 1, 4, 4, 3],
    beats: [
      { sutra: 2, change: 'Rode along with Police and Homelessness Task Force members to see street conditions firsthand, grounding recommendations in frontline evidence.' },
      { sutra: 5, change: 'Won buy-in from the Mayor, Council and 100+ officials and residents, and negotiated a Chief Data Officer proposal across departments.' }
    ],
    images: {
      hero: ph('Hero: the KPI framework or a ride-along photo'),
      approach: [ph('Before: activity-based tracking'), ph('After: outcome-based KPI framework')],
      output: ph('Strategic Plan amendment or leadership workshop')
    }
  });

  P.push({
    slug: 'urban95-child-friendly-smart-cities', order: 2, show: true, type: 'Work',
    title: 'DataSmart Urban95, Child-Friendly Smart Cities',
    year: 'Jan 2021 \u2013 Jul 2022',
    org: 'Government of India, Ministry of Housing and Urban Affairs',
    position: 'Consultant, Data Analytics and Management Unit, Smart Cities Mission (SCM)',
    summary: 'Pioneered data frameworks to measure the unmeasured (children, caregivers, informal workers) and trained 100 City Data Officers to embed them in policymaking, shifting how city governments discover the needs of latent constituents.',
    role: 'Project Coordinator', when: 'Jan 2021 \u2013 Jul 2022', where: 'New Delhi, India', team: 'Team of 6. Partners: Van Leer Foundation, National Institute of Urban Affairs',
    context: 'A national government flagship program covering 100 smart cities and 137 million people.',
    scope: ['Child-friendly policy toolkits', 'India Urban Observatory', 'Open Data Portal', 'Emerging-technology strategy'],
    metrics: [
      { value: '100',   label: 'Smart cities with child-friendly, evidence-based policymaking embedded' },
      { value: '8',     label: 'Data collection toolkits delivered, plus 2 indicator frameworks and 7 urban analytics dashboards' },
      { value: '94',    label: 'Hours of urban analytics instruction, training 100 City Data Officers' },
      { value: '$280K', label: 'US grant, delivered with a team of 6' }
    ],
    homeNote: 'Data frameworks to measure children, caregivers and informal workers, and 100 City Data Officers trained to use them.',
    problem: 'City governments had little data on children, caregivers and informal workers, so the needs of these constituents stayed invisible to policymaking.',
    approach: [
      'I coordinated multi-partner delivery of a national program with the Van Leer Foundation and the National Institute of Urban Affairs, embedding child-friendly, evidence-based policymaking across 100 smart cities.',
      'I led a six-member interdisciplinary team of researchers and consultants. Together we delivered 8 data collection toolkits, 2 indicator frameworks and 7 urban analytics dashboards for city policymakers.',
      'So that cities could work without us, I designed and delivered 94 hours of urban analytics instruction that trained 100 City Data Officers to collect and analyze data independently.'
    ],
    output: '8 data collection toolkits, 2 indicator frameworks and 7 urban analytics dashboards, plus 100 trained City Data Officers who can collect and analyze data independently.',
    tools: ['Project management', 'Research', 'Geospatial analysis', 'Indicator framework design', 'Dashboards', 'Training design', 'Grant reporting'],
    scores: [3, 4, 2, 3, 3, 4],
    beats: [
      { sutra: 2, change: 'Built data frameworks to measure the unmeasured: children, caregivers and informal workers.' },
      { sutra: 6, change: 'Trained 100 City Data Officers so cities could collect and analyze data on their own.' }
    ],
    images: {
      hero: ph('Hero: an urban analytics dashboard or a toolkit cover'),
      approach: [ph('A data collection toolkit'), ph('A City Data Officer training session')],
      output: ph('An indicator framework or dashboard')
    }
  });

  P.push({
    slug: 'policymind', order: 4, show: true, type: 'Academic',
    title: 'PolicyMind: Agentic AI Policymaking Platform',
    year: '2024',
    org: 'AI Venture Studio, MIT Media Lab',
    position: 'Policy and Product Design Lead',
    summary: 'An AI-first SaaS platform for policymaking, taken from concept to six public sector pilots.',
    role: 'Policy and Product Design Lead', when: '2024', where: 'AI Venture Studio, MIT Media Lab', team: 'Team of 4',
    metrics: [
      { value: '6',   label: 'Public sector pilots, including a national government and a UN agency' },
      { value: 'NSF', label: 'Selected for the National Science Foundation I-Corps' },
      { value: 'C10', label: 'Selected for the C10 Labs AI accelerator' },
      { value: '4',   label: 'People on the team' }
    ],
    homeNote: 'An AI-first policymaking SaaS platform, from concept to six public sector pilots.',
    problem: '[The policymaking problem PolicyMind set out to solve, and for whom.]',
    approach: [
      'I led end-to-end product design and prototyping of PolicyMind, from concept to delivery, integrating AI agents and iterating on product-market fit through continuous user testing.',
      'Strategic partnerships turned the prototype into 6 public sector pilots, including a national government and a UN agency.'
    ],
    output: 'PolicyMind, an AI-first SaaS platform for policymaking, with 6 public sector pilots. It was selected for the National Science Foundation (NSF) I-Corps and the C10 Labs AI accelerator.',
    scores: [3, 4, 3, 4, 2, 2],
    beats: [
      { sutra: 4, change: 'Iterated on product-market fit through continuous user testing while building.' },
      { sutra: 3, change: 'Delivered 6 public sector pilots, including a national government and a UN agency, before scaling.' }
    ],
    images: {
      hero: ph('Hero: the PolicyMind interface'),
      approach: [ph('Early prototype'), ph('Product after user testing')],
      output: ph('A pilot in use')
    }
  });

  P.push(blank(5,  'Academic',    '[Academic project title], Harvard / MIT', 'academic-project-1', [3, 3, 2, 3, 2, 2],
    [{ sutra: 4, change: '[What you did differently, and what happened.]' }, { sutra: 2, change: '[What you did differently, and what happened.]' }]));
  P.push(blank(6,  'Academic',    '[Second academic project title]',        'academic-project-2', [2, 3, 3, 2, 3, 2],
    [{ sutra: 3, change: '[What you did differently, and what happened.]' }, { sutra: 5, change: '[What you did differently, and what happened.]' }]));
  P.push(blank(7,  'Talk / Publication', '[Publication title]',                    'publication-1',      [2, 2, 2, 3, 3, 3],
    [{ sutra: 6, change: '[What you did differently, and what happened.]' }, { sutra: 1, change: '[What you did differently, and what happened.]' }]));
  P.push(blank(8,  'Talk / Publication', '[Talk title]',                           'talk-1',             [2, 3, 2, 2, 4, 3],
    [{ sutra: 5, change: '[What you did differently, and what happened.]' }, { sutra: 4, change: '[What you did differently, and what happened.]' }]));
  P.push(blank(9,  'Award / Competition', '[Award name]',                           'award-1',            [3, 2, 3, 3, 2, 3],
    [{ sutra: 2, change: '[What you did differently, and what happened.]' }, { sutra: 6, change: '[What you did differently, and what happened.]' }]));
  P.push(blank(10, 'Work',        '[Work project 10 title]',                'work-project-10',    [3, 2, 2, 4, 3, 2],
    [{ sutra: 4, change: '[What you did differently, and what happened.]' }, { sutra: 1, change: '[What you did differently, and what happened.]' }]));

  window.PROJECTS = P;
})();
