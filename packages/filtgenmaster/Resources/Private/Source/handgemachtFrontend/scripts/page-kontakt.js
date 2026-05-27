/* Handgemacht Studio — Kontakt Page Scripts */

(function () {
  var form = document.getElementById('contact-form');
  var errBox = document.getElementById('form-errors');
  var wrap = document.getElementById('contact-form-wrap');
  var errStyle = 'border-color:#a45a3c';

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('c-name');
    var email = document.getElementById('c-email');
    var message = document.getElementById('c-message');
    var consent = document.getElementById('c-consent');
    var errs = [];

    name.style.cssText = email.style.cssText = message.style.cssText = '';
    errBox.style.display = 'none';

    if (!name.value.trim()) { errs.push('Bitte gib deinen Namen an.'); name.style.cssText = errStyle; }
    if (!email.value.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) { errs.push('Bitte gib eine gültige E-Mail an.'); email.style.cssText = errStyle; }
    if (!message.value.trim()) { errs.push('Bitte schreib uns ein paar Sätze.'); message.style.cssText = errStyle; }
    if (!consent.checked) { errs.push('Bitte stimme der Datenverarbeitung zu.'); }

    if (errs.length) {
      errBox.textContent = errs.join(' · ');
      errBox.style.display = 'block';
      return;
    }

    var firstName = name.value.trim().split(' ')[0];
    wrap.innerHTML =
      '<div class="contact-form contact-form--sent">' +
        '<div class="contact-form__success-mark">' +
          '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l5 5 9-11"/></svg>' +
        '</div>' +
        '<h2 class="contact-form__success-title">Danke, ' + firstName + '.</h2>' +
        '<p class="contact-form__success-body">Deine Nachricht ist bei uns angekommen. Wir melden uns innerhalb von 24 Stunden zurück — meist deutlich schneller.</p>' +
        '<div style="margin-top:28px;display:flex;gap:14px;justify-content:center;flex-wrap:wrap">' +
          '<a class="btn btn--primary" href="../index.html">Zur Startseite <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>' +
          '<a class="btn btn--secondary" href="Events.html">Events ansehen</a>' +
        '</div>' +
      '</div>';
  });
})();
