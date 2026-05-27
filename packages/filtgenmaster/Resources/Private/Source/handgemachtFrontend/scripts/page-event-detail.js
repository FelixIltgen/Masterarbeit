/* Handgemacht Studio — Event Detail Page Scripts */

(function () {
  var id = new URLSearchParams(window.location.search).get('id');
  var ev = (id != null && EVENTS.find(function (e) { return String(e.id) === String(id); })) || EVENTS[0];

  document.getElementById('page-title').textContent = ev.title + ' — Handgemacht Studio';
  document.getElementById('ev-category-city').textContent = ev.category + ' · ' + ev.city;
  document.getElementById('ev-title').textContent = ev.title;
  document.getElementById('ev-sub').textContent = ev.date + ' · ' + ev.time + ' Uhr · ' + ev.location;
  document.getElementById('ev-lead').textContent = ev.desc;
  document.getElementById('ev-price').textContent = ev.price + ' €';
  document.getElementById('ev-date').textContent = ev.date;
  document.getElementById('ev-time-dur').textContent = ev.time + ' Uhr · ca. 3 Stunden';
  document.getElementById('ev-location').textContent = ev.location;
  document.getElementById('ev-city').textContent = ev.city;
  document.getElementById('ev-availability').textContent = ev.left + ' von ' + ev.spots + ' Plätzen frei';
  document.getElementById('ev-level').textContent = ev.level;
  document.getElementById('ev-media-label').textContent = 'Bildplatz · ' + ev.category;

  var media = document.getElementById('ev-media');
  media.className = 'event-detail__media teaser__media--' + ev.media + ' teaser__media--noise';
})();
