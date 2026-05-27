/* Handgemacht Studio — Events Page Scripts */

(function () {
  var grid = document.getElementById('all-events');
  if (!grid) return;
  EVENTS.forEach(function (ev) {
    grid.insertAdjacentHTML('beforeend', renderEventTeaser(ev, '../'));
  });
})();
