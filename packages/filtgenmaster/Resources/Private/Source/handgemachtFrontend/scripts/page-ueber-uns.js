/* Handgemacht Studio — Über uns Page Scripts */

(function () {
  var TEAM = [
    { name: 'Mona Bauer', role: 'Gründerin & Studio-Leitung', body: 'Töpferin in dritter Generation. Hat 2024 das erste Studio in Freiburg eröffnet, weil ihr in der Region eine echte Werkstatt zum Mitmachen gefehlt hat.', pal: { bg: '#c9a37a', mid: '#8b6440', dark: '#5a3f24', light: '#ECEAE2' } },
    { name: 'Jonas Reiter', role: 'Werkstattleitung Herbolzheim', body: 'Gelernter Schreiner, seit 2025 dabei. Führt die Holz- und Lederwerk-Events und baut die meisten Werkbänke selbst.', pal: { bg: '#a8835c', mid: '#6e4d2e', dark: '#3a2614', light: '#E8D9C5' } },
    { name: 'Clara Hertel', role: 'Druck & Grafik', body: 'Diplom-Grafikerin und Linol-Druckerin. Kuratiert die Druckwerk-Events und die visuelle Sprache des Studios.', pal: { bg: '#b5895a', mid: '#7a5a3c', dark: '#4f3621', light: '#ECEAE2' } }
  ];

  function teamAvatar(p, i) {
    var id = 'ta' + i;
    return '<svg viewBox="0 0 240 300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="width:100%;height:100%;display:block">' +
      '<defs><radialGradient id="' + id + '" cx="42%" cy="32%" r="85%">' +
        '<stop offset="0%" stop-color="' + p.bg + '"/>' +
        '<stop offset="60%" stop-color="' + p.mid + '"/>' +
        '<stop offset="100%" stop-color="' + p.dark + '"/>' +
      '</radialGradient></defs>' +
      '<rect width="240" height="300" fill="url(#' + id + ')"/>' +
      '<path d="M0,300 C40,240 80,220 120,220 C160,220 200,240 240,300 Z" fill="' + p.dark + '" opacity="0.65"/>' +
      '<circle cx="120" cy="130" r="58" fill="' + p.light + '" opacity="0.92"/>' +
      '<circle cx="120" cy="130" r="58" fill="' + p.mid + '" opacity="0.3"/>' +
      '<ellipse cx="100" cy="115" rx="18" ry="22" fill="' + p.light + '" opacity="0.4"/>' +
    '</svg>';
  }

  var grid = document.getElementById('team-grid');
  TEAM.forEach(function (m, i) {
    var art = document.createElement('article');
    art.className = 'team-member';
    art.innerHTML =
      '<div class="team-member__photo">' + teamAvatar(m.pal, i) + '</div>' +
      '<div class="team-member__role"><span class="lehm-line lehm-line--sm"></span> ' + m.role + '</div>' +
      '<h3 class="team-member__name">' + m.name + '</h3>' +
      '<p class="team-member__body">' + m.body + '</p>';
    grid.appendChild(art);
  });
})();
