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

  var p2 = blank(2, 'Work', '100-city data capacity program', 'data-capacity-100-cities', [3, 3, 1, 3, 4, 4],
    [{ sutra: 5, change: '[What you did differently, and what happened.]' }, { sutra: 6, change: '[What you did differently, and what happened.]' }]);
  p2.metrics[0] = { value: '100', label: 'Cities with new data capability' };
  p2.homeNote = '[One line on the cohort model and curriculum.]';
  P.push(p2);

  var p3 = blank(3, 'Work', 'Lean design for broken programs', 'lean-program-repair', [3, 4, 4, 4, 2, 3],
    [{ sutra: 2, change: '[What you did differently, and what happened.]' }, { sutra: 3, change: '[What you did differently, and what happened.]' }]);
  p3.homeNote = 'Inversion thinking turns ad hoc processes into rule-based systems.';
  p3.metrics[0] = { value: '[x]', label: '[Step-change result]' };
  P.push(p3);

  var p4 = blank(4, 'Work', 'AI-enabled public product', 'ai-public-product', [4, 3, 4, 3, 2, 2],
    [{ sutra: 1, change: '[What you did differently, and what happened.]' }, { sutra: 2, change: '[What you did differently, and what happened.]' }]);
  p4.homeNote = '[One line on the procurement and build approach.]';
  P.push(p4);

  P.push(blank(5,  'Academic',    '[Academic project title], Harvard / MIT', 'academic-project-1', [3, 3, 2, 3, 2, 2],
    [{ sutra: 4, change: '[What you did differently, and what happened.]' }, { sutra: 2, change: '[What you did differently, and what happened.]' }]));
  P.push(blank(6,  'Academic',    '[Second academic project title]',        'academic-project-2', [2, 3, 3, 2, 3, 2],
    [{ sutra: 3, change: '[What you did differently, and what happened.]' }, { sutra: 5, change: '[What you did differently, and what happened.]' }]));
  P.push(blank(7,  'Publication', '[Publication title]',                    'publication-1',      [2, 2, 2, 3, 3, 3],
    [{ sutra: 6, change: '[What you did differently, and what happened.]' }, { sutra: 1, change: '[What you did differently, and what happened.]' }]));
  P.push(blank(8,  'Talk',        '[Talk title]',                           'talk-1',             [2, 3, 2, 2, 4, 3],
    [{ sutra: 5, change: '[What you did differently, and what happened.]' }, { sutra: 4, change: '[What you did differently, and what happened.]' }]));
  P.push(blank(9,  'Award',       '[Award name]',                           'award-1',            [3, 2, 3, 3, 2, 3],
    [{ sutra: 2, change: '[What you did differently, and what happened.]' }, { sutra: 6, change: '[What you did differently, and what happened.]' }]));
  P.push(blank(10, 'Work',        '[Work project 10 title]',                'work-project-10',    [3, 2, 2, 4, 3, 2],
    [{ sutra: 4, change: '[What you did differently, and what happened.]' }, { sutra: 1, change: '[What you did differently, and what happened.]' }]));

  window.PROJECTS = P;
})();
