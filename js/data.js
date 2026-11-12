/* ==========================================================
   EDIT THIS FILE to change the site's content.
   - SITE: your name, email and links
   - SUTRAS: the six sutras (shared across the site)
   - PROJECTS: up to 10 projects. Set show:false to hide one.
   Anything in [square brackets] is a placeholder to replace.
   ========================================================== */

window.SITE = {
  name: 'Naman Sharma',
  email: 'hello@example.com',            // [YOUR EMAIL]
  sutrasUrl: 'https://claude.ai/artifact/RGq9E45kG9iemQ48DfNncv'  // swap for your public sutras page
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
    title: 'City-owned property disposition', year: '[Year]',
    summary: '[One-sentence summary: how an ad hoc process for selling city-owned property became a rule-based system.]',
    role: '[Your role]', when: '[Dates]', where: '[City / agency]', team: '[Who you worked with]',
    metrics: [
      { value: '12x',  label: 'Growth in city-owned property sales' },
      { value: '150+', label: 'Properties sold since January 2026' },
      { value: '[#]',  label: '[Third metric, e.g. revenue or time to sale]' },
      { value: '[#]',  label: '[Fourth metric]' }
    ],
    homeNote: '[One line on the rule set that replaced ad hoc dealmaking.]',
    problem: '[What was broken: who was affected, what the old process looked like, and what it cost the city and residents.]',
    approach: ['[Method: the rule set that replaced ad hoc dealmaking, how it was designed, and how it was tested. Two or three short paragraphs.]'],
    output: '[Output: the playbook, dashboard or policy that outlasts you, and who runs it now.]',
    scores: [2, 2, 3, 4, 3, 2],
    beats: [{ sutra: 3, change: '[What you did differently, and what happened.]' }, { sutra: 4, change: '[What you did differently, and what happened.]' }],
    images: {
      hero: ph('Hero: map of parcels sold, or the sales dashboard'),
      approach: [ph('The old process'), ph('The new rule-based flow')],
      output: ph('Playbook page or dashboard')
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
