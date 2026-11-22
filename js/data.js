/* ==========================================================
   EDIT THIS FILE to change the site's content.
   - SITE: your name and email
   - SUTRAS: the six sutras (shared across the site)
   - PROJECTS: up to 10 projects. Set show:false to hide one.
   Anything in [square brackets] is a placeholder to replace.
   ========================================================== */

window.SITE = {
  name: 'Naman Sharma',
  email: 'namansharma.iitr@gmail.com',
  /* Homepage recognition strip (3 cards). kind: 'video' | 'press' | 'post'.
     thumb: path to a local image (e.g. 'assets/press/name.jpg'); if missing or broken, a styled tile is shown.
     Leave url empty to show a placeholder card. */
  recognition: [
    { kind: 'video', outlet: 'YouTube', title: 'MIT $100K Competition',
      url: 'https://youtu.be/SSekvkT2WDA?t=426',
      thumb: 'https://img.youtube.com/vi/SSekvkT2WDA/hqdefault.jpg', date: '' },
    { kind: 'press', outlet: 'StateTech Magazine', title: 'Smart Cities Connect 2026: Cities Test Small Before Scaling AI and Data Projects',
      url: 'https://statetechmagazine.com/article/2026/10/smart-cities-connect-2026-cities-test-small-scaling-ai-and-data-projects',
      thumb: 'assets/press/statetech-smart-cities-connect.jpg', date: 'Oct 2026' },
    { kind: 'post', outlet: '', title: '', url: '', thumb: '', date: '' }
  ],
};

/* Two-level colour: the project's TYPE picks the colour family, and each project in
   that family gets the next shade, in display order. Edit the hex values to taste.
   Types are matched by keyword: "award"/"competition" -> award, "talk"/"presentation"/
   "publication" -> talk, "academic" -> academic, anything else -> work.
   Add family: 'work' | 'academic' | 'award' | 'talk' to a project to override. */
window.FAMILIES = {
  work:     { label: 'Work',                 shades: ['#C6F432', '#A8EC4F', '#8BE36A', '#E4F76E', '#6FD98A', '#B5E27C'] },
  academic: { label: 'Academic',             shades: ['#6CC4FF', '#8FA8FF', '#4FB0F0', '#A9C7FF', '#7BD0E8', '#9DB4FF'] },
  award:    { label: 'Award',  shades: ['#FFB547', '#FFC96B', '#FF9F5A', '#FFD98A', '#F5A83A', '#FFB27D'] },
  talk:     { label: 'Public Talk',   shades: ['#B49CFF', '#D98BF0', '#F78FC6', '#C7A8FF', '#E8A0E0', '#A98BF5'] }
};

window.SUTRAS = [
  { name: 'People first',        myth: 'Get the technology right and everything else will follow.',        sutra: 'People, processes, technology, in that order.',
    meaning: 'Start with the people using the service and the process they go through. Choose technology last, and only for a need you have proven.' },
  { name: 'Know your users',     myth: 'Build the solution and all users will find their way.',            sutra: 'Distinguish your users and map their needs, individually.',
    meaning: 'Residents and staff are not one average user. Name the groups, talk to real people in each, and map their needs one by one.' },
  { name: 'Small experiments',   myth: 'We can\u2019t afford to experiment. It\u2019s too risky.',          sutra: 'Build small versions. Break them before shipping.',
    meaning: 'Test a cheap, rough version in front of real users early, so mistakes happen at small scale instead of at launch.' },
  { name: 'Learn while doing',   myth: 'Design it right with the experts, then leave it to God.',          sutra: 'Learning while doing is the only design process that works.',
    meaning: 'Deliver in short cycles and adjust as you learn. The plan is only a starting guess until it meets real conditions.' },
  { name: 'Adaptive leadership', myth: 'Technical skills and motivation are enough to drive change.',      sutra: 'Technical skills without adaptive leadership is motion without progress.',
    meaning: 'Skills and tools fix technical problems. Change also needs leaders who work through habits, fears and competing interests.' },
  { name: 'Ownership',           myth: 'Perfect it, secure buy-in, and push it to scale.',                 sutra: 'Sow ideas early, nurture patiently, let ownership grow.',
    meaning: 'Bring staff in from the first idea so they run and improve the change long after you have gone.' }
];

/* ---------- PROJECTS ----------
   press: optional list of {kind, outlet, title, url, thumb, date}; 1-2 show in the sidebar, 3+ as a strip.
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
    slug: 'property-disposition', order: 1, show: true, type: 'Work', accent: '#C6F432',
    title: 'Reforming Trenton’s City-Owned Property Sales',
    year: 'Jul 2024 – present',
    org: 'City of Trenton, via the Bloomberg Center for Cities at Harvard University',
    position: 'Innovation Lead, Office of the Mayor',
    summary: 'Converted an ad hoc property disposition program into a repeatable, rules-based engine for neighborhood redevelopment, building the city’s innovation capability from the ground up.',
    role: 'Project Lead', when: 'Jul 2024 – present', where: 'Trenton, NJ', team: 'Partner: Real Estate division',
    context: 'Trenton has 91,500 residents and a $280 million annual operating budget. As a municipal government, it had no dedicated data or innovation officer.',
    scope: [
      'Affordable access to Trenton residents to buy city-owned vacant homes',
      'A rules-based program: process maps, SOPs and progress monitoring',
      'Automated workflows to close capacity gaps and standardize operations'
    ],
    metrics: [
      { value: '12x',  label: 'Growth in annual city-owned property sales' },
      { value: '150+', label: 'Properties sold since July 2025, up from about 12 a year' },
      { value: '580',  label: 'Applications in one month, versus an average of 80 previously' },
      { value: '$75K', label: 'Saved annually on application intake and processing' }
    ],
    homeNote: 'A four-pillar framework (Data, Processes, Applications, Governance) turned discretionary sales into a rules-based engine.',
    problem: 'City-owned property sales ran on discretion, not design. About 80 applications arrived every month, yet the program converted only one into a sale, and no explicit rules governed who received what. With no data or innovation officer, no one owned the fix.',
    approach: [
      'I led a redesign of the sales program around four pillars. Data: a centralized geospatial platform gave one view of every city-owned property. Processes: mapped workflows and a standard operating procedure replaced case-by-case handling. Applications: a streamlined intake reduced the effort and cost of processing. Governance: transparent pricing and applicant-priority rubrics replaced discretion with explicit rules.',
      'Multi-stakeholder workshops mapped how sales actually worked and redesigned it. The process maps they produced replaced discretionary decisions with rules-based criteria.',
      'Before buying anything, I validated user needs with personas and need-feature matrices, then tested no-cost minimum viable products (MVPs). The results shaped a standard operating procedure (SOP) with transparent pricing and applicant-priority rubrics, and saved $75K annually on application intake and processing.'
    ],
    output: 'A repeatable, rules-based property disposition engine: a centralized geospatial data platform, automated processes, and an SOP with transparent pricing and applicant-priority rubrics. It also built the city’s innovation capability from the ground up.',
    tools: ['Geospatial property data platform', 'Process mapping', 'User personas', 'Agile prototyping', 'Geospatial analysis', 'Generative AI', 'Dashboards'],
    scores: [4, 4, 4, 3, 3, 2],
    press: [
      { kind: 'press', outlet: 'City of Trenton', title: 'City of Trenton press release',
        url: 'https://www.trentonnj.org/m/newsflash/Home/Detail/1604', thumb: '', date: '' }
    ],
    beats: [
      { sutra: 1, change: 'Co-designed the process with the staff who run it, so the new rules work in practice.' },
      { sutra: 2, change: 'Profiled applicants and staff through personas and need-feature matrices before designing anything.' },
      { sutra: 3, change: 'Tested no-cost MVPs before any purchase, saving $75K annually on application intake and processing.' }
    ],
    images: {
      hero:     { html: 'assets/graphics/property-disposition/hero.html', alt: 'Animated hero: the same rules applied to every applicant', caption: '' },
      approach: [
        { html: 'assets/graphics/property-disposition/approach-1.html', alt: 'The four-pillar framework: Data, Processes, Applications, Governance', caption: '' },
        { html: 'assets/graphics/property-disposition/approach-2.html', alt: 'Animated swimlane of the property purchase SOP: discretion replaced by rules', caption: '' }
      ],
      output:   { html: 'assets/graphics/property-disposition/output.html', alt: 'Results to date', caption: '' }
    }
  });

  P.push({
    slug: 'riverside-homelessness-framework', order: 3, show: true, type: 'Work', accent: '#5FD3A8',
    title: 'Data-Driven Assessment Framework for Homelessness Reduction',
    year: 'Jun – Aug 2023',
    org: 'City of Riverside, via the Bloomberg Center for Cities at Harvard University',
    position: 'Bloomberg Harvard Summer Fellow, Office of the Mayor',
    summary: 'Established an outcome-based measurement framework for the city’s homelessness response, and taught staff to distinguish outputs from outcomes, shifting the organization from tracking activity to managing impact.',
    role: 'Lead', when: 'Jun – Aug 2023', where: 'Riverside, CA', team: 'Stakeholders: Mayor, City Council, Police, IT, Homelessness Task Force',
    context: 'Riverside has 325,000 residents and a $306 million annual operating budget. Its homelessness strategy had ambiguous outcome metrics.',
    scope: [
      'Outcome-based performance management for the Homelessness Action Plan',
      'Municipal data governance, anchored in the Strategic Plan'
    ],
    metrics: [
      { value: '3',    label: 'Amendments to the city’s Strategic Plan to overhaul municipal data governance' },
      { value: '100+', label: 'City officials and residents reached through executive presentations' },
      { value: '1',    label: 'Chief Data Officer role proposed, to scale data governance across city hall' },
      { value: '3',    label: 'Frameworks taught to the Mayor’s Office leadership team: PDIA, Theory of Change, Public Value' }
    ],
    homeNote: 'An outcome-based KPI framework and data governance reforms for the Homelessness Action Plan.',
    problem: 'Riverside’s Homelessness Action Plan had ambiguous outcome metrics, so the city tracked activity rather than impact. Without strong data governance, it was hard to say what was working.',
    approach: [
      'I led three amendments to the city’s Strategic Plan to overhaul municipal data governance, winning buy-in through executive presentations to the Mayor, Council, and 100+ city officials and residents.',
      'I formulated a key performance indicator (KPI) framework with definitions, formulas and benchmarks drawn from peer California action plans, so the Homelessness Action Plan could be measured objectively. To ground it in evidence, I rode along with Police and Homelessness Task Force members to see street conditions firsthand and identify service-delivery challenges.',
      'To make it last, I built a business case for a Chief Data Officer role and negotiated it across departments, and ran workshops on Problem-Driven Iterative Adaptation (PDIA), Theory of Change and the Public Value Framework for the Mayor’s Office leadership team.'
    ],
    output: 'An outcome-based measurement framework for the city’s homelessness response, three Strategic Plan amendments on data governance, a proposed Chief Data Officer role, and a leadership team trained to tell outputs from outcomes.',
    tools: ['Comparative analysis', 'Policy writing', 'KPI design', 'Stakeholder interviews', 'PDIA', 'Theory of change'],
    scores: [3, 4, 1, 4, 4, 3],
    beats: [
      { sutra: 2, change: 'Rode along with Police and Homelessness Task Force members to see street conditions firsthand, grounding recommendations in frontline evidence.' },
      { sutra: 5, change: 'Won buy-in from the Mayor, Council and 100+ officials and residents, and negotiated a Chief Data Officer proposal across departments.' }
    ],
    images: {
      hero:     { html: 'assets/graphics/riverside-homelessness-framework/hero.html', alt: 'Animated hero: the exploded stack of the Homelessness Performance Framework', caption: '' },
      approach: [
        { html: 'assets/graphics/riverside-homelessness-framework/approach-1.html', alt: 'Before: how the city tracked homelessness performance', caption: '' },
        { html: 'assets/graphics/riverside-homelessness-framework/approach-2.html', alt: 'Interactive: the 3E approach to the performance framework', caption: '' }
      ],
      output:   { html: 'assets/graphics/riverside-homelessness-framework/output.html', alt: 'The assessment framework app', caption: '' }
    }
  });

  P.push({
    slug: 'datasmart-urban95', order: 2, show: true, type: 'Work', accent: '#A8EC4F',
    title: 'Embedding Data into Policy for Child-Friendly Smart Cities',
    year: 'Jan 2021 – Jul 2022',
    org: 'Government of India, Ministry of Housing and Urban Affairs',
    position: 'Consultant, Data Analytics and Management Unit, Smart Cities Mission (SCM)',
    summary: 'Pioneered data frameworks to measure the unmeasured (children and their caregivers) and trained 100 City Data Officers to embed them in policymaking, shifting how city governments discover the needs of latent constituents.',
    role: 'Project Coordinator', when: 'Jan 2021 – Jul 2022', where: 'New Delhi, India', team: 'Team of 6. Partners: Van Leer Foundation, National Institute of Urban Affairs',
    context: 'A national government flagship program covering 100 smart cities and 137 million people.',
    scope: [
      'An evidence base for child-friendly policy: indicator frameworks and data collection toolkits',
      'Decision tools for policymakers: urban analytics dashboards',
      'City capability: training City Data Officers to run the system without us'
    ],
    metrics: [
      { value: '100',            label: 'Smart cities with child-friendly, evidence-based policymaking embedded' },
      { value: '8',              label: 'Data collection toolkits delivered, plus 2 indicator frameworks and 7 urban analytics dashboards' },
      { value: '94',             label: 'Hours of urban analytics instruction, training 100 City Data Officers' },
      { value: 'INR 20 million', label: '(US$280k) grant, delivered with a team of 6' }
    ],
    homeNote: 'Data frameworks to measure children and their caregivers, and 100 City Data Officers trained to use them.',
    problem: 'City governments had little data on children and their caregivers, so the needs of these constituents stayed invisible to policymaking.',
    approach: [
      'I coordinated multi-partner delivery of a national program with the Van Leer Foundation and the National Institute of Urban Affairs, embedding child-friendly, evidence-based policymaking across 100 smart cities.',
      'I led a six-member interdisciplinary team of researchers and consultants. Together we delivered 8 data collection toolkits, 2 indicator frameworks and 7 urban analytics dashboards for city policymakers.',
      'So that cities could work without us, I designed and delivered 94 hours of urban analytics instruction that trained 100 City Data Officers to collect and analyze data independently.'
    ],
    output: '8 data collection toolkits, 2 indicator frameworks and 7 urban analytics dashboards, plus 100 trained City Data Officers who can collect and analyze data independently.',
    tools: ['Project management', 'Research', 'Geospatial analysis', 'Indicator framework design', 'Dashboards', 'Training design', 'Grant reporting'],
    scores: [3, 4, 2, 3, 3, 4],
    beats: [
      { sutra: 2, change: 'Built data frameworks to measure the unmeasured: children and their caregivers.' },
      { sutra: 6, change: 'Trained 100 City Data Officers so cities could collect and analyze data on their own.' }
    ],
    images: {
      hero:     { html: 'assets/graphics/datasmart-urban95/hero.html', alt: 'Animated hero: the city at a child’s eye level', caption: '' },
      approach: [
        { html: 'assets/graphics/datasmart-urban95/approach-1.html', alt: 'Interactive Safety Report Card', caption: '' },
        { html: 'assets/graphics/datasmart-urban95/approach-2.html', alt: 'Process explorer: the sensory audit of an anganwadi play area', caption: '' }
      ],
      output:   { html: 'assets/graphics/datasmart-urban95/output.html', alt: 'Interactive inter-city comparison matrix', caption: '' }
    }
  });

  P.push({
    "slug": "policymind",
    "order": 4,
    "show": true,
    "type": "Academic",
    "accent": "#6CC4FF",
    "title": "PolicyMind: Agentic AI Policymaking Platform",
    "year": "2024",
    "org": "AI Venture Studio, MIT Media Lab",
    "position": "Policy and Product Design Lead",
    "summary": "An AI-first SaaS platform for policymaking, taken from concept to six public sector pilots.",
    "role": "Policy and Product Design Lead",
    "when": "2024",
    "where": "AI Venture Studio, MIT Media Lab",
    "team": "Team of 4",
    "context": "Policymakers design policy with limited time, data and tools, and bad policy compounds across thousands of communities. PolicyMind serves policymakers at every level of government, starting with Massachusetts\u2019 351 municipalities.",
    "scope": [
      "An AI platform for the policy lifecycle: Ideate \u00b7 Create \u00b7 Simulate \u00b7 Participate",
      "A three-layer knowledge base that keeps every output evidence-based and locally grounded",
      "Public sector pilots that prove the need and set the roadmap"
    ],
    "metrics": [
      {
        "value": "6",
        "label": "Public sector pilots, including a national government and a UN agency"
      },
      {
        "value": "MIT $100k",
        "label": "Finalists in the Entrepreneurship Competition"
      },
      {
        "value": "MassChallenge",
        "label": "Selected for Boston Residency Program"
      },
      {
        "value": "Gold Prize",
        "label": "MIT Media Lab Demo Day"
      }
    ],
    "homeNote": "An AI-first policymaking SaaS platform, from concept to six public sector pilots.",
    "problem": "Policymaking runs on limited time, data and tools. Governments lean on outside consultants who deliver one-size-fits-all reports, and on unstructured public feedback. Half-baked policies fail, and the damage compounds across thousands of communities. A single policy takes 220 to 840 days and $100K to $2M in consulting fees, built on fragmented evidence, with little modelling and minimal citizen input. Generic AI does not fix this: it lacks policy nuance and local context, and off-the-shelf tools have already failed in government.",
    "approach": [
      "I led product and policy design of PolicyMind, a web-based AI platform where policymakers research, analyze, collaborate on and draft policies, programs and strategy documents. It covers the policy lifecycle in four modules: Ideate (evidence, comparisons with peer cities, recommendations), Create (automated drafting of ordinances, regulations and strategic plans), Simulate (projected impact) and Participate (real-time citizen feedback), all inside a dedicated workspace for each initiative.",
      "The core design choice was architecture, not a bigger model. Three knowledge bases ground every output: global (verified policy intelligence from governments, universities and think tanks), organization (a jurisdiction\u2019s own policies, ordinances, budgets and procedures) and project (the user\u2019s own data). Users choose which are active, so answers are globally informed and locally relevant, without relying on public LLM data.",
      "I took it to market through public sector pilots, which validated both the need and the approach. The roadmap follows what pilots asked for: universal workflows (data and sentiment analysis, legal compliance checks, stakeholder mapping), domain-specific ones starting with open meeting law, simulation models inside the recommendation engine so recommendations arrive with projected impact, and a path from design to implementation through pre-vetted consultants and vendors."
    ],
    "output": "PolicyMind, a working AI policymaking platform with four lifecycle modules (Ideate, Create, Simulate, Participate), built on three knowledge bases, with six public sector pilots and a roadmap toward the single system governments use across the whole policy lifecycle, from research and design to testing and implementation. It was selected for the National Science Foundation (NSF) I-Corps, the C10 Labs AI accelerator, and MassChallenge Boston Residency.",
    "tools": [
      "AI agents",
      "Knowledge base design",
      "Comparative policy analysis",
      "Gap and SWOT analysis",
      "Impact simulation",
      "Citizen feedback design",
      "Product design and prototyping",
      "User testing",
      "Customer discovery",
      "Pilot design",
      "Go-to-market strategy"
    ],
    "scores": [
      3,
      4,
      3,
      4,
      2,
      2
    ],
    "beats": [
      {
        "sutra": 4,
        "change": "Iterated on product-market fit through continuous user testing while building."
      },
      {
        "sutra": 3,
        "change": "Delivered six public sector pilots, including a national government and a UN agency, before scaling."
      }
    ],
    "images": {
      "hero": {
        "html": "assets/graphics/policymind/hero.html",
        "alt": "Animated hero: before and after PolicyMind",
        "caption": ""
      },
      "approach": [
        {
          "html": "assets/graphics/policymind/approach-1.html",
          "alt": "Interactive flowchart of the PolicyMind approach",
          "caption": ""
        },
        {
          "html": "assets/graphics/policymind/approach-2.html",
          "alt": "Interactive Simulate screen",
          "caption": ""
        }
      ],
      "output": {
        "html": "assets/graphics/policymind/output.html",
        "alt": "PolicyMind business model",
        "caption": ""
      }
    }
  });

  P.push({
    "slug": "iccc",
    "order": 6,
    "show": true,
    "type": "Work",
    "accent": "#B8D63A",
    "title": "12+ Months to 30 Days: India\u2019s Smart City Command Centers",
    "year": "Jan 2021 \u2013 Jul 2022",
    "org": "Government of India, Ministry of Housing and Urban Affairs",
    "position": "Consultant, Data Analytics and Management Unit, Smart Cities Mission",
    "summary": "Coordinated the ministry\u2019s project management of command center rollout across 45 smart cities, and cut the average go-live time from 12+ months to just 30 days.",
    "role": "Project Coordinator",
    "when": "Jan 2021 \u2013 Jul 2022",
    "where": "New Delhi, India, with 45 smart cities",
    "team": "Partners: 45 cities and their Master System Integrators",
    "context": "The Smart Cities Mission was India\u2019s flagship urban program, covering 100 cities. Integrated Command and Control Centers (ICCCs), the operations hubs of a smart city, were being rolled out in 45 of them through their Master System Integrators.",
    "scope": [
      "Rollout across 45 smart cities",
      "Critical path and bottleneck anticipation",
      "Model RFP development"
    ],
    "metrics": [
      {
        "value": "45",
        "label": "Smart cities supported through command center rollout"
      },
      {
        "value": "30 days",
        "label": "Average time to go live, down from 12+ months"
      },
      {
        "value": "1",
        "label": "Vendor-neutral Model RFP replacing 45 separate starting points"
      },
      {
        "value": "4",
        "label": "Major reforms built into the Model RFP, from standardisation to vendor neutrality"
      }
    ],
    "homeNote": "Cut the average time to launch command centers across India\u2019s smart cities from 12+ months to 30 days.",
    "problem": "When I was brought to coordinate the project management, forty-five smart cities were building ICCCs, each through its own Master System Integrator, and the average go-live took more than 12 months. Each city drafted its own RFP with limited staff and technology know-how, so key clauses were missed and requirements often leaned toward specific vendors. When COVID-19 hit, a command center that was months away was a war room that did not exist. Every week of delay meant a city fighting the pandemic without one.",
    "approach": [
      "I negotiated with the cities and their Master System Integrators and coordinated a Model RFP so that cities did not each have to write their own terms. It built in what field deployments had taught since the first ICCC in 2017: stronger standardisation, wider use of Public-Private-Partnership and Make-In-India guidelines, emerging technologies and data-driven governance, and vendor-neutral requirements that gave domestic bidders a level playing field. One shared document replaced 45 separate starting points.",
      "As project coordinator for the ministry\u2019s rollout, I helped each city define its critical path and hold its scope, so that additions did not push back go-live. I reported progress to ministry leadership throughout.",
      "I worked with city teams to anticipate bottlenecks before they stalled a city, and resolved them early through cross-agency collaboration rather than waiting for escalation. During the COVID-19 lockdown, several cities needed to import radars: I consolidated their requirements into one request, escalated it to ministry leadership, and worked with the Ministry of Home Affairs, state police and chief ministers\u2019 offices to clear import and internal movement."
    ],
    "output": "A vendor-neutral Model RFP that cities could reuse, a critical path and scope discipline across 45 cities, and an average go-live time cut from 12+ months to 30 days. It showed that a ministry can speed up projects it does not run by giving cities better tools and a clearer path, not more instructions.",
    "tools": [
      "Critical path planning",
      "Scope management",
      "Model RFP development",
      "Executive reporting",
      "Cross-agency coordination",
      "Stakeholder negotiation",
      "Project management"
    ],
    "scores": [
      3,
      2,
      1,
      3,
      4,
      3
    ],
    "beats": [
      {
        "sutra": 5,
        "change": "Moved 45 city-run projects forward through negotiation and a shared Model RFP, not directives."
      },
      {
        "sutra": 4,
        "change": "Spotted rollout bottlenecks alongside city teams and resolved them early."
      }
    ],
    "images": {
      "hero": {
        "html": "assets/graphics/iccc/hero.html",
        "alt": "Two time strips drawn to scale: 12+ months against 30 days",
        "caption": ""
      },
      "approach": [
        {
          "html": "assets/graphics/iccc/approach-1.html",
          "alt": "45 lanes, one Model RFP, one start line",
          "caption": ""
        },
        {
          "html": "assets/graphics/iccc/approach-2.html",
          "alt": "Three root causes, three levers, one outcome",
          "caption": ""
        }
      ],
      "output": {
        "html": "assets/graphics/iccc/output.html",
        "alt": "The three volumes of the Model RFP",
        "caption": ""
      }
    }
  });
  P.push({
    "slug": "iuo",
    "order": 7,
    "show": true,
    "type": "Work",
    "accent": "#8BE36A",
    "title": "Geospatial Research for India\u2019s Data-Constrained Cities",
    "year": "Jan 2021 \u2013 Jul 2022",
    "org": "Government of India, Ministry of Housing and Urban Affairs",
    "position": "Consultant, Data Analytics and Management Unit, Smart Cities Mission",
    "summary": "Led adoption of a demand-driven Research-as-a-Service model at the India Urban Observatory, giving data-constrained cities on-demand analytical capacity. Addressed 12 city policy demands through bespoke, rigorous data analysis, and observatory engagement had more than doubled.",
    "role": "Research and Development Lead",
    "when": "Jan 2021 \u2013 Jul 2022",
    "where": "New Delhi, India",
    "team": "Team of 5. Partners: Esri, National Institute of Urban Affairs, UN-Habitat",
    "context": "The India Urban Observatory is a national initiative under the Smart Cities Mission to embed data-driven decisions and build capacity in Indian cities. Many cities had little data or analytical capacity of their own.",
    "scope": [
      "Research-as-a-Service model",
      "Working groups for rigorous research and data analysis",
      "Peer learning across cities"
    ],
    "metrics": [
      {
        "value": "12",
        "label": "Data-driven solutions delivered for cities"
      },
      {
        "value": "2x+",
        "label": "Growth in observatory engagement"
      },
      {
        "value": "400+",
        "label": "Datasets collected, cleaned and analyzed"
      },
      {
        "value": "22",
        "label": "Cities reached through peer learning"
      }
    ],
    "homeNote": "Gave data-constrained cities on-demand research capacity, and more than doubled engagement with the observatory.",
    "problem": "The India Urban Observatory was supply-driven: it produced research on the datasets it already held, without assessing whether cities needed them. Adoption was low, and cities without their own analysts were left furthest behind.",
    "approach": [
      "I created the business case for a demand-driven model and led its adoption as Research-as-a-Service: cities request the analysis they need, so research starts from a policy question rather than from the data on hand. The model gave cities analytical capacity on demand, without having to build their own.",
      "I worked closely with each city government through one rigorous method: locate and clean data from various sources, analyze them, visualize the findings and turn them into policy recommendations. Esri, the National Institute of Urban Affairs and UN-Habitat were partners.",
      "I then built a partnerships that brings academia, think tanks and the public into problem-solving alongside city governments, grounded in the quadruple helix model of public innovation. I also facilitated peer exchange between cities through webinars, so each city\u2019s solution could inform the next."
    ],
    "output": "The observatory became attuned to cities\u2019 needs, not just its own research: a rigorous analytical method, a quadruple helix partnership, and peer exchange that carries each city\u2019s solution to others. Engagement more than doubled.",
    "tools": [
      "Research-as-a-Service",
      "Business case development",
      "Data collection and cleaning",
      "Data analysis",
      "Data visualization",
      "Geospatial analytics",
      "Policy recommendation writing",
      "Quadruple helix partnerships",
      "Peer-learning webinars",
      "Stakeholder workshops"
    ],
    "scores": [
      3,
      4,
      2,
      4,
      3,
      2
    ],
    "beats": [
      {
        "sutra": 2,
        "change": "Rebuilt the observatory around what cities lacked, which was analytical help on demand rather than more data."
      },
      {
        "sutra": 5,
        "change": "Shifted the observatory from handing cities answers to convening them, so cities and partners solved problems together and learned from each other."
      }
    ],
    "images": {
      "hero": {
        "html": "assets/graphics/iuo/hero.html",
        "alt": "Animated 3D hero: the India Urban Observatory",
        "caption": ""
      },
      "approach": [
        {
          "html": "assets/graphics/iuo/approach-1.html",
          "alt": "A city request analysed in layers",
          "caption": ""
        },
        {
          "html": "assets/graphics/iuo/approach-2.html",
          "alt": "The Mission Model Canvas",
          "caption": ""
        }
      ],
      "output": {
        "html": "assets/graphics/iuo/output.html",
        "alt": "The interchange: four partners meet at the observatory",
        "caption": ""
      }
    }
  });
  P.push({
    "slug": "lynn-pathways",
    "order": 8,
    "show": true,
    "type": "Academic",
    "accent": "#7EA2D8",
    "title": "Lynn Pathways LLC: A $137M Workforce and Enterprise Plan",
    "year": "Jan \u2013 May 2023",
    "org": "Harvard Graduate School of Design, Core Urban Planning Studio II, Lynn: A Greater Gateway",
    "position": "Co-Lead, Strategy, Programming and Real Estate Financial Analysis",
    "summary": "Co-wrote the RFP for Lynn\u2019s career incubator, then designed the proposal to run it: a workforce pipeline, a business incubator and a mixed-use Gateway Center, tested in a 20-year financial model.",
    "role": "Co-Lead",
    "when": "Jan \u2013 May 2023",
    "where": "Lynn, MA",
    "team": "Team of 2. Client: City of Lynn",
    "context": "Lynn is the second most dense city in Greater Boston region. Its proximity to Boston, affordable real estate and diverse population are its main assets.",
    "scope": [
      "RFP for the City\u2019s career incubator",
      "Workforce and business incubation programs",
      "Gateway Center and 20-year DCF"
    ],
    "metrics": [
      {
        "value": "$137M",
        "label": "Mixed-use program, modeled over 20 years"
      },
      {
        "value": "3,000",
        "label": "Jobs targeted at supported and financed enterprises"
      },
      {
        "value": "500",
        "label": "Trainees targeted each year"
      },
      {
        "value": "$62M",
        "label": "Modeled after-tax cash flow over 20 years"
      }
    ],
    "homeNote": "A workforce and enterprise strategy for Lynn, tested in a 20-year financial model.",
    "problem": "In Lynn, 62% of residents work in jobs paying $50,000 or less a year, local businesses lose customers to neighboring areas, and support services for workers and businesses are scattered. Each problem was visible on its own, but no single plan connected them.",
    "approach": [
      "I studied Lynn\u2019s economic and workforce data and Greater Boston\u2019s industrial ecosystem to define what the city needed, and co-wrote that into the RFP for its career incubator. From the same analysis I built a theory of change linking three problems (low-paying jobs, retail leakage and fragmented support) to four target groups: immigrants and refugees, women, emerging professionals and local small businesses. I then conceived Lynn Pathways LLC, a coalition of industry, academia and community partners, to deliver it.",
      "I programmed the offer in two tracks: a development pipeline for individuals (map and curate, build and match, dispatch) and an incubator for small businesses (pre-incubation, incubation, post-incubation). Both sit in a Gateway Center on the MBTA garage site. For a newly arrived refugee, one building replaces separate trips for a work permit, English classes, childcare and a job fair, saving about an hour a day, worth roughly $5,475 a year.",
      "I then tested whether the plan could be built and sustained, modeling the 317,000 sq ft, $137M development over 20 years. The model set the use mix (lab, light manufacturing, office, retail, incubator and events) and 40/60 equity-debt split, returning about $62M in after-tax cash flow and more than $37M in tax revenue."
    ],
    "output": "A coalition concept for delivering workforce development in Lynn, a research method that turns economic and workforce data into program and site decisions, and a vision to realize Lynn\u2019s economic potential to the fullest. The boards were presented to residents and city officials at a public open house at the Lynn Museum. The studio\u2019s overall project, Lynn: A Greater Gateway, won the 2024 Student Project Award from the American Planning Association Massachusetts Chapter.",
    "tools": [
      "RFP drafting",
      "Theory of change",
      "Program design",
      "Coalition design",
      "Walkshed and site analysis",
      "Mixed-use programming",
      "Capital stack structuring",
      "20-year DCF modeling"
    ],
    "scores": [
      3,
      4,
      1,
      2,
      2,
      3
    ],
    "beats": [
      {
        "sutra": 2,
        "change": "Started from three problems and four target groups, from immigrants and refugees to local small businesses, before designing any program."
      },
      {
        "sutra": 1,
        "change": "Designed a coalition of industry, academia and community partners to deliver the plan, not just a design for the city."
      }
    ],
    "images": {
      "hero": {
        "html": "assets/graphics/lynn-pathways/hero.html",
        "alt": "Animated hero: how people and enterprises flow through Lynn Pathways",
        "caption": ""
      },
      "approach": [
        {
          "html": "assets/graphics/lynn-pathways/approach-1.html",
          "alt": "Barriers decide which careers stay open",
          "caption": ""
        },
        {
          "html": "assets/graphics/lynn-pathways/approach-2.html",
          "alt": "Interactive theory of change",
          "caption": "",
          "ratio": "r169"
        }
      ],
      "output": {
        "html": "assets/graphics/lynn-pathways/output.html",
        "alt": "Interactive financial elements of Lynn Pathways",
        "caption": ""
      }
    }
  });
  P.push({
    "slug": "dehradun-behaviours",
    "order": 9,
    "show": true,
    "type": "Award",
    "accent": "#FFB547",
    "title": "Making Transit the Default: A Behavioral Shift Plan for Dehradun",
    "year": "Jun \u2013 Aug 2025",
    "org": "National Institute of Urban Affairs and Atlas for Behaviour Change in Development",
    "position": "Co-Lead: Simulation and Framework Design",
    "summary": "Won the 2025 Urban Behaviours Ideathon with E-PRAWAH, a systems plan that uses an agent-based simulation of 100 commuter personas to rank how Dehradun can move commuters from private vehicles to public transport.",
    "role": "Co-Lead: Simulation and Framework Design",
    "when": "Jun \u2013 Aug 2025",
    "where": "Dehradun, India",
    "team": "Team of 3",
    "context": "Dehradun has 1.05 million registered vehicles, 94% of them private, while public transport is about 2% of the fleet. Traffic volumes are three to four times what its roads can carry.",
    "scope": [
      "Behavioral research and sentiment analysis",
      "E-PRAWAH framework and targeted nudges",
      "Agent-based simulation of 100 personas"
    ],
    "metrics": [
      {
        "value": "Winner",
        "label": "2025 Urban Behaviours Ideathon"
      },
      {
        "value": "73%",
        "label": "Simulated shift from private to public transport with all interventions"
      },
      {
        "value": "37%",
        "label": "Simulated shift from one real-time, multi-mode transit platform, the top intervention"
      },
      {
        "value": "100",
        "label": "Commuter personas in the agent-based simulation"
      }
    ],
    "homeNote": "A behavioral plan to make public transport Dehradun\u2019s default, ranked by an agent-based simulation of 100 commuter personas.",
    "problem": "Dehradun\u2019s traffic volumes are three to four times what its roads can carry, and 94% of its 1.05 million vehicles are private. Public transport is about 2% of the fleet, with one vehicle for every 60 people, so most residents have no real alternative to the scooter.",
    "approach": [
      "We started with commuters, not buses: secondary research and a web-scraped sentiment analysis of residents\u2019 views, which surfaced the pain points of each mode. We then followed one persona, Rekha\u2019s mother, through four daily trips, and on every one the scooter beat transit.",
      "From those pain points we built E-PRAWAH (pravah (Hindi) means \"flow), a framework to make public transport **E**fficient, **P**rofessional, **R**eliable, **A**ttractive, **W**elcoming, **A**ffordable and **H**assle-free. We paired it with targeted nudges for three commuter groups (occasional users, regular users and avoiders), drawn from the EAST framework.",
      "A city cannot do everything at once, so we built an agent-based simulation on the COM-B behavior model, with 100 commuter personas, to test each intervention alone and together. We ranked them against a real constraint: design within 12 months and a budget of INR 50 million. Two won on impact and feasibility, a real-time platform integrating information across modes and fare concessions, and the full package projects a 73% shift."
    ],
    "output": "A framework that treats congestion as a behavior problem as much as an infrastructure one, a simulation method that ranks interventions by impact and feasibility under real budget limits, and a theory of change with KPIs from inputs to impact. It also states its assumptions and limits openly, including that the simulation depends on the quality of its personas and data.",
    "tools": [
      "Sentiment analysis",
      "Secondary research",
      "Persona and journey mapping",
      "COM-B model",
      "EAST framework",
      "Agent-based simulation",
      "Impact-feasibility prioritization",
      "Theory of change with KPIs"
    ],
    "scores": [
      3,
      4,
      3,
      2,
      2,
      2
    ],
    "beats": [
      {
        "sutra": 2,
        "change": "Followed one commuter through four daily trips to see why the scooter wins each time, before designing any intervention."
      },
      {
        "sutra": 3,
        "change": "Tested every intervention in a simulation first, so a city with a fixed budget can pick the few that work."
      }
    ],
    "images": {
      "hero": {
        "html": "assets/graphics/dehradun-behaviours/hero.html",
        "alt": "Animated hero: 100 commuters",
        "caption": ""
      },
      "approach": [
        {
          "html": "assets/graphics/dehradun-behaviours/approach-1.html",
          "alt": "Pain points by mode of transport",
          "caption": ""
        },
        {
          "html": "assets/graphics/dehradun-behaviours/approach-2.html",
          "alt": "The E-PRAWAH framework",
          "caption": ""
        }
      ],
      "output": {
        "html": "assets/graphics/dehradun-behaviours/output.html",
        "alt": "Interventions ranked by impact and feasibility",
        "caption": ""
      }
    }
  });
  P.push({
    "slug": "how-to-not-fail-the-people-we-serve",
    "order": 10,
    "show": true,
    "type": "Talk",
    "accent": "#EDB8F9",
    "title": "How to NOT Fail the People We Serve",
    "year": "Sep 2026",
    "org": "Smart Cities Connect Fall 2026, Washington, D.C.",
    "position": "Speaker and panelist",
    "summary": "Argued at Smart Cities Connect 2026 that residents experience government through its processes, not its dashboards, and gave city leaders six principles for putting people and process before technology.",
    "role": "Speaker and panelist",
    "when": "Sep 2026",
    "where": "Washington, D.C.",
    "team": "Panel with a New Bedford Fellow and Baltimore\u2019s CDO",
    "context": "Cities invest in dashboards and command centers, yet much of city government still runs on legal pads and spreadsheets. The session asked how city halls can rebuild public trust through process innovation, AI and analytics.",
    "scope": [
      "Six principles for process-led innovation",
      "Data as institutional memory",
      "AI to stress-test processes"
    ],
    "metrics": [
      {
        "value": "0",
        "label": "Platforms bought before the need was proven; an Excel MVP came first"
      },
      {
        "value": "6",
        "label": "Operating principles for putting people and process before technology"
      },
      {
        "value": "3",
        "label": "Talks on this approach in 2026, in Raleigh, Cambridge and Washington, D.C."
      },
      {
        "value": "3 days",
        "label": "To test a process in the AI sandbox (resident personas, scenarios, edge cases)"
      }
    ],
    "homeNote": "Residents experience government through processes, not dashboards: six principles for city halls that want to rebuild trust.",
    "problem": "Cities are drowning in data but starving for decisions. The general brochure promises a command center of screens, cameras and sensors, like those I worked on across India\u2019s smart cities. But residents never see the screens. They experience the process behind them: who they call, how long they wait, and whether anyone owns the outcome.",
    "approach": [
      "I started by redefining data. It is not just spreadsheets, PDFs and dashboards; below the waterline sits institutional memory: workarounds, unwritten rules, the history of why a step was added, and staff frustrations. The spreadsheet tells you what happened. The people tell you why.",
      "I then applied my six principles, which put people and process ahead of technology and design for the individual user, not the average one. They favor small experiments that fail early over big launches that fail late, and learning while delivering over planning in advance. They pair technical skill with adaptive leadership, and end by letting staff own the change, so it outlasts the project.",
      "I showed AI as a process tool, not a product. In Trenton, I built an AI sandbox that tested a draft process against 21 user personas and 38 scenarios. It surfaced 9 edge cases in 3 days; a conventional pilot would have taken more than 2 months."
    ],
    "output": "A shared language for city leaders: six principles, a wider definition of data, and one line to carry back to city hall: residents experience government through processes, not dashboards. StateTech Magazine covered the session, under the theme of cities testing small before scaling AI and data projects.",
    "tools": [
      "Six-principle framework",
      "Institutional-memory capture",
      "User personas",
      "AI process sandbox",
      "Iterative prototyping",
      "Adaptive leadership"
    ],
    "scores": [
      4,
      4,
      4,
      4,
      4,
      4
    ],
    "beats": [],
    "images": {
      "hero": {
        "html": "assets/graphics/how-to-not-fail-the-people-we-serve/hero.html",
        "alt": "Hero: How to NOT Fail the People We Serve",
        "caption": ""
      },
      "approach": [
        {
          "html": "assets/graphics/how-to-not-fail-the-people-we-serve/sutra-1.html",
          "alt": "Sutra 1: People first",
          "caption": ""
        },
        {
          "html": "assets/graphics/how-to-not-fail-the-people-we-serve/sutra-2.html",
          "alt": "Sutra 2: Know your users",
          "caption": ""
        },
        {
          "html": "assets/graphics/how-to-not-fail-the-people-we-serve/sutra-3.html",
          "alt": "Sutra 3: Small experiments",
          "caption": ""
        },
        {
          "html": "assets/graphics/how-to-not-fail-the-people-we-serve/sutra-4.html",
          "alt": "Sutra 4: Learn while doing",
          "caption": ""
        },
        {
          "html": "assets/graphics/how-to-not-fail-the-people-we-serve/sutra-5.html",
          "alt": "Sutra 5: Adaptive leadership",
          "caption": ""
        },
        {
          "html": "assets/graphics/how-to-not-fail-the-people-we-serve/sutra-6.html",
          "alt": "Sutra 6: Ownership",
          "caption": ""
        }
      ]
    }
  });
  P.push({
    "slug": "innovation-program",
    "order": 5,
    "show": true,
    "type": "Work",
    "accent": "#E4F76E",
    "title": "Trenton Innovation Program: Data, Automation and Compliance",
    "year": "Dec 2024 \u2013 present",
    "org": "City of Trenton",
    "position": "Innovation Lead, Office of the Mayor",
    "summary": "Developed the shared data platform and a hub-and-spoke innovation model, in which a central hub equips program owners with data and automation, so that eight Trenton departments run on one trusted picture of the city, starting with housing, in a government with no data officer.",
    "role": "Program Lead",
    "when": "Dec 2024 \u2013 present",
    "where": "Trenton, NJ",
    "team": "Partners: 8 city departments (housing and economic dev., fire, police, water, taxes, public works, parks, health); platform vendor; NYU CUSP",
    "context": "Trenton has 91,500 residents and a $280 million annual operating budget but no dedicated data or innovation officer. Each department managed its own data.",
    "scope": [
      "Data-sharing pipelines and QA/QC",
      "Automated workflows to implement programs",
      "GIS analysis and training",
      "Redevelopment compliance solution with NYU CUSP"
    ],
    "metrics": [
      {
        "value": "330+",
        "label": "Datasets integrated on a geospatial base"
      },
      {
        "value": "4",
        "label": "Housing programs onboarded: city-owned property sales, demolitions, abandoned properties, redevelopment RFPs"
      },
      {
        "value": "$338K",
        "label": "Projected net labor savings ($400K avoided effort, $62K cost)"
      },
      {
        "value": "24 minutes",
        "label": "Average case processing time, cut from 4 days"
      }
    ],
    "homeNote": "A central hub gives city programs the data and automation to execute, learn and improve, so decisions rest on data and operations run on automated workflows.",
    "problem": "Trenton\u2019s departments each held their own data, and no one at city hall was responsible for connecting it. Without a shared picture, decisions started with hunting for information rather than acting on it. A city with no data officer had no one whose job was to fix that.",
    "approach": [
      "I started with an inventory, not a vendor, mapping what data each of the 8 departments held and what each team needed to do its job, and convened a working group so the departments shaped the data-sharing needs rather than just receiving them. I then partnered with the platform vendor to build the analytics and data-sharing pipelines, ran data quality assurance and control (QA/QC) so staff could trust what they saw, and trained departmental staff in data literacy and GIS so the platform runs on daily use, not on me.",
      "In February 2026 I set up a hub-and-spoke innovation program, with the platform as the hub and each program as a spoke. The hub is a central capability in city hall: it offers four services:",
      [
        "Map processes",
        "Analyze data",
        "Build MVPs",
        "Integrate on the platform"
      ],
      "The spokes, the program owners, use these to execute their programs, experiment and learn as they go, and report what they learn back to the hub, which turns each lesson into an improvement across city hall. Three programs have come onboard since: property demolitions, implementation of the Abandoned Properties Rehabilitation Act, and property sales RFPs. For each, I assessed the team\u2019s data and process needs, then managed the vendor through build, testing, QA/QC approval, deployment and support. I also manage procurement of AI tools for abandoned property identification and tree mapping, projecting $338K in net labor savings ($400K of avoided effort against $62K of cost).",
      "To extend the program beyond city hall, I applied open innovation principles and invited NYU CUSP to build on our platform a redevelopment compliance monitoring solution. It tracks redevelopment activity across every city-sold property and flags those missing deadlines, augmenting the city\u2019s capacity to monitor and enforce."
    ],
    "output": "A centralized geospatial data and workflow platform, a hub-and-spoke model in which 3 housing programs execute, learn and feed improvements back to city hall, and a projected net saving of $338K. It is the data foundation under the city-owned property sales program, which has sold 150+ properties since July 2025, and it gives a city with no data officer a capability that outlasts any one person.",
    "tools": [
      "Geospatial data platform",
      "Needs assessment",
      "Process mapping",
      "Vendor management",
      "Data QA/QC",
      "Deployment support",
      "GIS training",
      "Stakeholder workshops",
      "Business case development"
    ],
    "scores": [
      3,
      4,
      3,
      3,
      2,
      4
    ],
    "beats": [
      {
        "sutra": 2,
        "change": "Inventoried each team\u2019s data and process needs before choosing what to build."
      },
      {
        "sutra": 6,
        "change": "Trained departmental staff in data literacy so each department owns the platform and uses it without my support."
      }
    ],
    "images": {
      "hero": {
        "html": "assets/graphics/innovation-program/hero.html",
        "alt": "Animated 3D hero: registration",
        "caption": ""
      },
      "approach": [
        {
          "html": "assets/graphics/innovation-program/approach-1.html",
          "alt": "Data inventory across the eight departments",
          "caption": ""
        },
        {
          "html": "assets/graphics/innovation-program/approach-2.html",
          "alt": "Hub-and-spoke innovation model",
          "caption": ""
        }
      ],
      "output": {
        "html": "assets/graphics/innovation-program/output.html",
        "alt": "One property tracked through the platform",
        "caption": ""
      }
    }
  });

  window.PROJECTS = P;
})();
