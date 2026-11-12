/* Renders the homepage and project pages from js/data.js. No build step needed. */
(function () {
  'use strict';

  var SITE = window.SITE;
  var SUTRAS = window.SUTRAS;
  var PROJECTS = window.PROJECTS.filter(function (p) { return p.show !== false; })
    .sort(function (a, b) { return a.order - b.order; });

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function projectUrl(p) { return 'project.html?p=' + encodeURIComponent(p.slug); }

  /* ---------- radar chart (small) ---------- */
  function radar(scores) {
    var cx = 120, cy = 115, R = 70, LR = 96;
    function ang(i) { return (-90 + 60 * i) * Math.PI / 180; }
    function pt(i, r) { return [cx + r * Math.cos(ang(i)), cy + r * Math.sin(ang(i))]; }
    function poly(pts) { return pts.map(function (p) { return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' '); }
    function ring(f) { return poly([0, 1, 2, 3, 4, 5].map(function (i) { return pt(i, R * f); })); }
    var axes = [0, 1, 2, 3, 4, 5].map(function (i) {
      var p = pt(i, R);
      return '<line class="axis" x1="' + cx + '" y1="' + cy + '" x2="' + p[0].toFixed(1) + '" y2="' + p[1].toFixed(1) + '"/>';
    }).join('');
    var area = poly(scores.map(function (v, i) { return pt(i, R * (0.12 + 0.88 * v / 4)); }));
    var labels = [0, 1, 2, 3, 4, 5].map(function (i) {
      var p = pt(i, LR);
      return '<text x="' + p[0].toFixed(1) + '" y="' + p[1].toFixed(1) + '" text-anchor="middle" dominant-baseline="central">' + pad(i + 1) + '</text>';
    }).join('');
    var desc = 'Sutra profile, depth from 0 to 4: ' + scores.map(function (v, i) {
      return SUTRAS[i].name + ' ' + v;
    }).join(', ');
    return '<svg class="radar" viewBox="0 0 240 230" role="img" aria-label="' + esc(desc) + '">' +
      '<polygon class="ring" points="' + ring(1 / 3) + '"/>' +
      '<polygon class="ring" points="' + ring(2 / 3) + '"/>' +
      '<polygon class="ring outer" points="' + ring(1) + '"/>' +
      axes +
      '<polygon class="area" points="' + area + '"/>' +
      labels + '</svg>';
  }

  function topTwo(scores) {
    var order = scores.map(function (v, i) { return i; }).sort(function (a, b) { return scores[b] - scores[a] || a - b; });
    return order.slice(0, 2).map(function (i) { return pad(i + 1) + ' ' + SUTRAS[i].name; });
  }

  /* ---------- images: real file or labelled placeholder ---------- */
  function media(spec, frameClass) {
    spec = spec || { src: '', alt: 'Image' };
    if (spec.src) {
      return '<figure class="media"><div class="frame ' + frameClass + '"><img src="' + esc(spec.src) + '" alt="' + esc(spec.alt) + '" loading="lazy"></div>' +
        (spec.caption ? '<figcaption>' + esc(spec.caption) + '</figcaption>' : '') + '</figure>';
    }
    return '<div class="frame ' + frameClass + ' placeholder" role="img" aria-label="Placeholder: ' + esc(spec.alt) + '"><span>[Image: ' + esc(spec.alt) + ']</span></div>';
  }

  /* ---------- shared: contact button from SITE.email ---------- */
  function fillSite() {
    var links = document.querySelectorAll('[data-email]');
    for (var i = 0; i < links.length; i++) {
      links[i].href = 'mailto:' + SITE.email;
      if (links[i].hasAttribute('data-email-text')) links[i].textContent = SITE.email;
    }
    var yr = $('#year');
    if (yr) yr.textContent = new Date().getFullYear();
  }

  /* ---------- HOME ---------- */
  function initHome() {
    // Parcel figure: deterministic pattern
    var parcels = $('#parcels');
    var cells = '';
    for (var i = 0; i < 60; i++) {
      cells += '<i' + (((i * 7 + 3) % 5 === 0 || i % 11 === 4) ? ' class="sold"' : '') + '></i>';
    }
    parcels.innerHTML = cells;

    // Sutras
    $('#sutra-list').innerHTML = SUTRAS.map(function (s, i) {
      return '<li><span class="n">' + pad(i + 1) + '</span>' +
        '<p class="myth">' + esc(s.myth) + '</p>' +
        '<p class="rule">' + esc(s.sutra) + '</p></li>';
    }).join('');

    // Work list + detail
    var list = $('#work-list');
    var detail = $('#work-detail');
    list.innerHTML = PROJECTS.map(function (p, i) {
      return '<li><button type="button" data-i="' + i + '" aria-pressed="false">' +
        '<span class="num">' + pad(i + 1) + '</span>' +
        '<span class="ttl">' + esc(p.title) + '</span>' +
        '<span class="kind">' + esc(p.type) + '</span></button></li>';
    }).join('');

    function show(i) {
      var p = PROJECTS[i];
      var btns = list.querySelectorAll('button');
      for (var b = 0; b < btns.length; b++) btns[b].setAttribute('aria-pressed', b === i ? 'true' : 'false');
      var m = p.metrics;
      var strong = topTwo(p.scores);
      detail.innerHTML =
        '<div class="detail-main">' +
          '<p class="label">Project ' + pad(i + 1) + ' &middot; ' + esc(p.type) + '</p>' +
          '<h3>' + esc(p.title) + '</h3>' +
          '<div class="tiles">' +
            '<div class="tile"><strong>' + esc(m[0].value) + '</strong><span>' + esc(m[0].label) + '</span></div>' +
            '<div class="tile"><strong>' + esc(m[1].value) + '</strong><span>' + esc(m[1].label) + '</span></div>' +
          '</div>' +
          '<dl class="facts">' +
            '<div><dt>Role</dt><dd>' + esc(p.role) + '</dd></div>' +
            '<div><dt>When</dt><dd>' + esc(p.when) + '</dd></div>' +
            '<div><dt>Where</dt><dd>' + esc(p.where) + '</dd></div>' +
          '</dl>' +
          '<p class="note">' + esc(p.homeNote) + '</p>' +
          '<a class="btn" href="' + projectUrl(p) + '">View project</a>' +
        '</div>' +
        '<div class="detail-radar">' +
          '<p class="label">Sutra profile</p>' + radar(p.scores) +
          '<p class="strong">Strongest: ' + esc(strong[0]) + ', ' + esc(strong[1]) + '</p>' +
        '</div>';
    }

    list.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-i]');
      if (btn) show(parseInt(btn.getAttribute('data-i'), 10));
    });
    show(0);
  }

  /* ---------- PROJECT PAGE ---------- */
  function initProject() {
    var slug = new URLSearchParams(window.location.search).get('p');
    var idx = 0;
    for (var i = 0; i < PROJECTS.length; i++) { if (PROJECTS[i].slug === slug) idx = i; }
    var p = PROJECTS[idx];
    document.title = p.title + ' \u2014 ' + SITE.name;

    $('#p-head').innerHTML =
      '<a class="crumb" href="index.html#work">&larr; Back to selected work</a>' +
      '<span class="label">Project ' + pad(idx + 1) + ' &middot; ' + esc(p.type) + ' &middot; ' + esc(p.year) + '</span>' +
      '<h1>' + esc(p.title) + '</h1>' +
      '<p class="summary">' + esc(p.summary) + '</p>' +
      (p.org ? '<p class="affil">' + esc(p.position || '') + (p.position ? ', ' : '') + esc(p.org) + '</p>' : '') +
      '<dl class="meta">' +
        '<div><dt>Role</dt><dd>' + esc(p.role) + '</dd></div>' +
        '<div><dt>Timeline</dt><dd>' + esc(p.when) + '</dd></div>' +
        '<div><dt>Where</dt><dd>' + esc(p.where) + '</dd></div>' +
        '<div><dt>Team and partners</dt><dd>' + esc(p.team) + '</dd></div>' +
      '</dl>';

    var h = p.images.hero;
    $('#p-hero').innerHTML = media(h, 'wide') + (!h.src ? '<p class="media-cap label" style="margin-top:10px">Fig. 1 &mdash; [Caption]</p>' : '');

    $('#p-kpis').innerHTML = p.metrics.map(function (m) {
      return '<li><strong>' + esc(m.value) + '</strong><span>' + esc(m.label) + '</span></li>';
    }).join('');

    var approach = p.approach.map(function (t) { return '<p class="copy">' + esc(t) + '</p>'; }).join('');
    $('#p-main').innerHTML =
      '<div><h2>The problem</h2><p class="problem">' + esc(p.problem) + '</p>' +
        (p.context ? '<p class="context">' + esc(p.context) + '</p>' : '') + '</div>' +
      (p.scope ? '<div><h2>Scope</h2><ul class="scope">' + p.scope.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul></div>' : '') +
      '<div><h2>The approach</h2>' + approach +
        '<div class="pair">' + media(p.images.approach[0], 'r43') + media(p.images.approach[1], 'r43') + '</div></div>' +
      '<div><h2>What it left behind</h2><p class="copy">' + esc(p.output) + '</p>' +
        '<div class="single">' + media(p.images.output, 'r169') + '</div></div>';

    var strong = topTwo(p.scores);
    $('#p-side').innerHTML =
      '<p class="label">Sutra profile</p>' + radar(p.scores) +
      '<p class="note">Strongest: ' + esc(strong[0]) + ', ' + esc(strong[1]) + '. Numbers refer to the six sutras on the homepage.</p>' +
      (p.tools ? '<div class="side-tools"><p class="label">Tools and methods</p><ul class="chips">' + p.tools.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul></div>' : '');

    $('#p-beats').innerHTML = p.beats.map(function (b) {
      var s = SUTRAS[b.sutra - 1];
      return '<li class="beat">' +
        '<div class="from"><p class="label">The myth we faced</p><p class="myth">' + esc(s.myth) + '</p></div>' +
        '<div class="via"><p class="label">Sutra ' + pad(b.sutra) + '</p><p class="rule">' + esc(s.sutra) + '</p></div>' +
        '<div class="to"><p class="label">What changed</p><p class="change">' + esc(b.change) + '</p></div></li>';
    }).join('');

    // Previous / next (wraps around)
    if (PROJECTS.length > 1) {
      var prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
      var next = PROJECTS[(idx + 1) % PROJECTS.length];
      var pi = (idx - 1 + PROJECTS.length) % PROJECTS.length;
      var ni = (idx + 1) % PROJECTS.length;
      $('#pn').innerHTML =
        '<div class="pn-grid">' +
          '<a class="prev" href="' + projectUrl(prev) + '"><span class="dir">&larr; Previous project</span><span class="idx">' + pad(pi + 1) + '</span><span class="t">' + esc(prev.title) + '</span></a>' +
          '<a class="next" href="' + projectUrl(next) + '"><span class="dir">Next project &rarr;</span><span class="idx">' + pad(ni + 1) + '</span><span class="t">' + esc(next.title) + '</span></a>' +
        '</div>' +
        '<p class="pn-all"><a href="index.html#work">All selected work</a></p>';
    }
  }

  fillSite();
  var page = document.body.getAttribute('data-page');
  if (page === 'home') initHome();
  if (page === 'project') initProject();
})();
