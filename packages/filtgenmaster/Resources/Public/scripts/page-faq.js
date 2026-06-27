/* Handgemacht Studio — FAQ Page Scripts */

(function () {
  var FAQ_GROUPS = [
    {
      title: 'Vor dem Event',
      items: [
        { q: 'Brauche ich Vorkenntnisse?', a: 'Nein. Unsere Events sind ausdrücklich für Anfänger gemacht. Du brauchst nur Neugier, der Rest kommt vor Ort. Erfahrene Guides begleiten dich Schritt für Schritt.' },
        { q: 'Was muss ich mitbringen?', a: 'Nichts außer dir selbst. Alle Materialien und Werkzeuge sind im Preis enthalten. Eine Schürze stellen wir bei „schmutzigen" Events zur Verfügung.', a2: 'Wenn du möchtest, ziehe bequeme Kleidung an, auf der etwas Lehm oder Holzstaub landen darf.' },
        { q: 'Wie viele Personen sind dabei?', a: 'Wir arbeiten in kleinen Gruppen: maximal 15 Personen pro Event, je nach Handwerk teils nur 4–10. Das ist bewusst so gewählt, damit jeder gesehen wird und Zeit am Werkzeug bekommt.' },
        { q: 'Kann ich alleine kommen oder muss ich eine Gruppe mitbringen?', a: 'Komm gerne alleine. Die meisten Teilnehmer kommen alleine. Du wirst nicht der einzige sein. Du kannst aber auch zu zweit oder als kleine Gruppe buchen.' }
      ]
    },
    {
      title: 'Buchung & Kosten',
      items: [
        { q: 'Was kostet ein Event und was ist enthalten?', a: 'Die Preise liegen je nach Handwerk und Materialaufwand zwischen 48 € und 95 € pro Person. Im Preis enthalten sind: alle Materialien, Werkzeuge, die Anleitung durch erfahrene Handwerker und natürlich dein fertiges Werk zum Mitnehmen.' },
        { q: 'Wie buche ich einen Event?', a: 'Direkt online über die Event-Übersicht. Du wählst dein Event, gibst Name und E-Mail an und bezahlst per Kreditkarte, PayPal oder Klarna. Du bekommst sofort eine Bestätigung per Mail.' },
        { q: 'Kann ich stornieren oder umbuchen?', a: 'Stornierung bis 48 Stunden vor dem Event ist kostenlos. Du bekommst den vollen Betrag zurück.', a2: 'Umbuchen auf einen anderen Termin geht jederzeit bis 24 Stunden vor dem Event, ohne Aufpreis.' },
        { q: 'Gibt es Gutscheine?', a: 'Ja. Du kannst Gutscheine über jeden Betrag oder direkt für ein bestimmtes Event kaufen. Sie sind 24 Monate gültig und für alle Events einlösbar. Schreib uns einfach an hallo@handgemacht-studio.de.' }
      ]
    },
    {
      title: 'Während & nach dem Event',
      items: [
        { q: 'Was nehme ich mit nach Hause?', a: 'Immer dein eigenes, fertiges Werk. Bei Töpferevents nimmst du dein gebranntes Stück 2–3 Wochen später mit oder lässt es dir zusenden dafür fallen ggf. Versandkosten an. Alle anderen Werke (Holz, Druck, Schmuck) sind am Ende des Abends fertig.' },
        { q: 'Wie lange dauert ein Event?', a: 'Die meisten Events dauern zwischen 2,5 und 3,5 Stunden. Die genaue Dauer findest du auf der jeweiligen Event-Seite. Wir starten pünktlich. Komm gerne 10 Minuten vorher. Die Getränke stehen bereit ;)' },
        { q: 'Können wir auch Firmen-Events oder private Gruppen buchen?', a: 'Ja, sehr gerne. Wir richten Workshops für Teams (8–16 Personen), Junggesellinnen-Abschiede oder Geburtstage aus. Gerne in unseren Werkstätten oder bei dir vor Ort.', a2: 'Schreib uns deine Wünsche an hallo@handgemacht-studio.de, wir machen dir ein Angebot.' },
        { q: 'Was passiert bei Krankheit oder Absage von eurer Seite?', a: 'Sollten wir den Event krankheits- oder wetterbedingt absagen müssen, bekommst du den vollen Betrag zurück oder bist auf den nächsten Termin umgebucht, du entscheidest.' }
      ]
    }
  ];

  var container = document.getElementById('faq-accordion');
  var openIdx = 0;

  function chevronSVG() {
    return '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';
  }

  function renderFAQ() {
    container.innerHTML = '';
    var idx = 0;
    FAQ_GROUPS.forEach(function (group) {
      var head = document.createElement('div');
      head.className = 'faq-group__head';
      head.innerHTML = '<span>' + group.title + '</span>';
      container.appendChild(head);

      var list = document.createElement('div');
      list.className = 'faq-list';

      group.items.forEach(function (item) {
        var i = idx++;
        var wrap = document.createElement('div');
        wrap.className = 'faq-item' + (i === openIdx ? ' faq-item--open' : '');

        wrap.innerHTML =
          '<button class="faq-item__trigger" aria-expanded="' + (i === openIdx) + '">' +
            '<div class="faq-item__num">' + String(i + 1).padStart(2, '0') + '</div>' +
            '<h3 class="faq-item__q">' + item.q + '</h3>' +
            '<div class="faq-item__icon" aria-hidden="true">' + chevronSVG() + '</div>' +
          '</button>' +
          '<div class="faq-item__panel" role="region">' +
            '<div class="faq-item__inner">' +
              '<p class="faq-item__a">' + item.a + '</p>' +
              (item.a2 ? '<p class="faq-item__a">' + item.a2 + '</p>' : '') +
            '</div>' +
          '</div>';

        wrap.querySelector('.faq-item__trigger').addEventListener('click', function () {
          openIdx = (openIdx === i) ? -1 : i;
          renderFAQ();
        });

        list.appendChild(wrap);
      });
      container.appendChild(list);
    });
  }

  renderFAQ();
})();
