/* Handgemacht Studio — Shared Site JavaScript */
(function () {

  /* ============================================================
     EVENTS DATA
     ============================================================ */
  window.EVENTS = [
    { id: 1, title: 'Töpfern für Anfänger', category: 'Töpferwerk', city: 'Freiburg', date: 'Sa, 14. Juni', time: '18:00', location: 'Werkstatt Lehmweg 4', spots: 8, left: 3, level: 'Anfänger', price: 68, desc: 'Du arbeitest an der Scheibe und formst eine eigene Schale aus Steinzeug-Ton.', media: 'ton', badge: 'Neu' },
    { id: 2, title: 'Linoldruck-Abend', category: 'Druckwerk', city: 'Herbolzheim', date: 'Mi, 18. Juni', time: '19:00', location: 'Werkhof am Bach', spots: 8, left: 5, level: 'Anfänger', price: 54, desc: 'Eigenes Motiv schneiden, drucken — drei Karten plus ein A4-Print zum Mitnehmen.', media: 'lino' },
    { id: 3, title: 'Holzlöffel schnitzen', category: 'Holzwerk', city: 'Herbolzheim', date: 'Sa, 21. Juni', time: '14:00', location: 'Scheune im Hinterhof', spots: 6, left: 2, level: 'Anfänger', price: 72, desc: 'Aus einem rohen Stück Kirschholz schnitzt du deinen eigenen Esslöffel.', media: 'holz', badge: 'Nur 2 Plätze' },
    { id: 4, title: 'Makramee · Wandbehang', category: 'Knüpfwerk', city: 'Freiburg', date: 'So, 22. Juni', time: '11:00', location: 'Studio Marktstraße 12', spots: 8, left: 6, level: 'Anfänger', price: 48, desc: 'Du knüpfst einen 60-cm-Wandbehang aus Naturbaumwolle — Holzstange inklusive.', media: 'makra' },
    { id: 5, title: 'Lederwerk · Geldbeutel', category: 'Lederwerk', city: 'Herbolzheim', date: 'Sa, 28. Juni', time: '15:00', location: 'Sattlerei am Bach', spots: 6, left: 1, level: 'Leicht fortgeschritten', price: 89, desc: 'Pflanzlich gegerbtes Rindsleder, von Hand vernäht — dein eigener Geldbeutel.', media: 'leder', badge: 'Nur 1 Platz' },
    { id: 6, title: 'Silberring schmieden', category: 'Schmuck', city: 'Freiburg', date: 'Fr, 4. Juli', time: '18:30', location: 'Goldschmiede Altstadt', spots: 4, left: 4, level: 'Anfänger', price: 95, desc: 'Aus Silberdraht formst, lötest und polierst du deinen eigenen Ring.', media: 'silber', badge: 'Neu' }
  ];

  /* ============================================================
     ICONS
     ============================================================ */
  var iconPaths = {
    'arrow':        '<path d="M5 12h14M13 6l6 6-6 6"/>',
    'arrow-left':   '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    'calendar':     '<rect x="3" y="5" width="18" height="16" rx="1.5"/><path d="M3 9h18"/><path d="M8 3v4M16 3v4"/>',
    'pin':          '<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    'users':        '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M15.5 14.5A4.5 4.5 0 0 1 21 19"/><circle cx="17" cy="8" r="2.6"/>',
    'clock':        '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    'check':        '<path d="M5 12.5l5 5 9-11"/>',
    'chevron-down': '<path d="M6 9l6 6 6-6"/>',
    'mail':         '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 7 9-7"/>',
    'phone':        '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
    'instagram':    '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>',
    'tiktok':       '<path d="M14 4v10.5a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 4c.5 2.5 2.5 4.5 5 5"/>',
    'facebook':     '<path d="M16 4h-2.5A3.5 3.5 0 0 0 10 7.5V10H8v3h2v8h3v-8h2.5l.5-3H13V8c0-.5.5-1 1-1h2V4z"/>'
  };

  window.icon = function (name, sz, sw) {
    sz = sz || 16; sw = sw || 1.6;
    var p = iconPaths[name] || '';
    return '<svg width="' + sz + '" height="' + sz + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' + sw + '" stroke-linecap="round" stroke-linejoin="round">' + p + '</svg>';
  };

  /* ============================================================
     TEASER CARD HTML
     ============================================================ */
  window.renderEventTeaser = function (ev, basePath) {
    basePath = basePath || '';
    var badgeClass = /Nur \d+ Pl/.test(ev.badge || '') ? 'teaser__badge--soft' : ev.badge === 'Neu' ? 'teaser__badge--accent' : '';
    var badge = ev.badge ? '<span class="teaser__badge ' + badgeClass + '">' + ev.badge + '</span>' : '';
    return '<a class="teaser" href="' + basePath + 'pages/Event Detail.html?id=' + ev.id + '" aria-label="' + ev.title + ' – Details ansehen">' +
      '<div class="teaser__media teaser__media--' + ev.media + ' teaser__media--noise">' +
        badge +
        '<div class="teaser__price">' + ev.price + ' €<small>&nbsp;p.P.</small></div>' +
      '</div>' +
      '<div class="teaser__body">' +
        '<div class="teaser__overline">' + ev.category + ' · ' + ev.city + '</div>' +
        '<h3 class="teaser__title">' + ev.title + '</h3>' +
        '<div class="teaser__divider"></div>' +
        '<p class="teaser__desc">' + ev.desc + '</p>' +
        '<div class="teaser__meta">' +
          '<div class="teaser__meta-row">' + window.icon('calendar', 14) + ' <span>' + ev.date + '</span><span style="color:var(--fg-3)">·</span>' + window.icon('clock', 14) + ' <span>' + ev.time + '</span></div>' +
          '<div class="teaser__meta-row">' + window.icon('pin', 14) + ' <span>' + ev.location + '</span></div>' +
          '<div class="teaser__meta-row teaser__meta-row--avail">' + window.icon('users', 13) + ' <span>' + ev.left + ' von ' + ev.spots + ' Plätzen frei · ' + ev.level + '</span></div>' +
        '</div>' +
      '</div>' +
    '</a>';
  };

  /* ============================================================
     HEADER SCROLL BEHAVIOUR
     ============================================================ */
  function initHeader() {
    var header = document.getElementById('site-header');
    var burger = document.getElementById('burger-btn');
    var mobileMenu = document.getElementById('mobile-menu');
    if (!header) return;

    var menuOpen = false;
    var hasHover = window.matchMedia('(hover: hover)').matches;
    var REVEAL_ZONE = 80, HIDE_AFTER = 600, SCROLL_THRESHOLD = 20, SCROLL_DELTA = 6;
    var hideTimer = null, lastScroll = window.scrollY, hoverHold = false;

    function setScrolled(v) { header.classList.toggle('site-header--scrolled', v); }
    function setHidden(v)   { header.classList.toggle('site-header--hidden', v && !menuOpen); }

    function update() {
      var y = window.scrollY;
      setScrolled(y > SCROLL_THRESHOLD);
      if (y <= SCROLL_THRESHOLD) {
        if (hideTimer) { clearTimeout(hideTimer); hideTimer = null; }
        setHidden(false); lastScroll = y; return;
      }
      var delta = y - lastScroll;
      if (Math.abs(delta) < SCROLL_DELTA) return;
      if (delta > 0) { if (!hoverHold) setHidden(true); }
      else { if (hideTimer) { clearTimeout(hideTimer); hideTimer = null; } setHidden(false); }
      lastScroll = y;
    }

    function onMove(e) {
      if (!hasHover || window.scrollY <= SCROLL_THRESHOLD) return;
      if (e.clientY <= REVEAL_ZONE) {
        hoverHold = true;
        if (hideTimer) { clearTimeout(hideTimer); hideTimer = null; }
        setHidden(false);
      } else if (e.clientY > REVEAL_ZONE + 40 && hoverHold) {
        hoverHold = false;
        if (hideTimer) clearTimeout(hideTimer);
        hideTimer = setTimeout(function () { setHidden(true); }, HIDE_AFTER);
      }
    }

    function onLeave() {
      if (window.scrollY <= SCROLL_THRESHOLD) return;
      hoverHold = false;
      if (hideTimer) clearTimeout(hideTimer);
      hideTimer = setTimeout(function () { setHidden(true); }, HIDE_AFTER);
    }

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    update();

    if (!burger || !mobileMenu) return;

    function openMenu() {
      menuOpen = true;
      header.classList.add('site-header--menu-open');
      mobileMenu.classList.add('site-header__mobile--open');
      mobileMenu.setAttribute('aria-hidden', 'false');
      burger.setAttribute('aria-expanded', 'true');
      burger.setAttribute('aria-label', 'Menü schließen');
      burger.classList.add('site-header__burger--open');
      document.body.style.overflow = 'hidden';
      setHidden(false);
    }

    function closeMenu() {
      menuOpen = false;
      header.classList.remove('site-header--menu-open');
      mobileMenu.classList.remove('site-header__mobile--open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Menü öffnen');
      burger.classList.remove('site-header__burger--open');
      document.body.style.overflow = '';
    }

    burger.addEventListener('click', function () { if (menuOpen) closeMenu(); else openMenu(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && menuOpen) closeMenu(); });
    window.addEventListener('resize', function () { if (window.innerWidth > 980 && menuOpen) closeMenu(); });
  }

  /* ============================================================
     SCROLL REVEAL
     ============================================================ */
  function initScrollReveal() {
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var AUTO = ['.section-head', '.usp__bullet', '.teaser', '.testimonial',
      '.about__col', '.value', '.faq-item', '.event-card', '.contact-card',
      '.contact-form', '.hero__stat', '.team-member', '.standort'];

    function tag() {
      AUTO.forEach(function (sel) {
        document.querySelectorAll(sel).forEach(function (el, i) {
          if (el.hasAttribute('data-reveal')) return;
          el.setAttribute('data-reveal', '');
          if (i > 0 && i < 12) el.style.setProperty('--reveal-delay', (i * 60) + 'ms');
        });
      });
    }

    function reveal() {
      var els = document.querySelectorAll('[data-reveal]:not(.is-revealed)');
      if (reduced) {
        els.forEach(function (el) { el.classList.add('is-revealed'); el.removeAttribute('data-reveal'); });
        return;
      }
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var el = entry.target;
            el.classList.add('is-revealed');
            io.unobserve(el);
            setTimeout(function () { el.removeAttribute('data-reveal'); }, 900);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      els.forEach(function (el) { io.observe(el); });
    }

    tag(); reveal();
    var pending = false;
    new MutationObserver(function () {
      if (pending) return; pending = true;
      requestAnimationFrame(function () { pending = false; tag(); reveal(); });
    }).observe(document.body, { childList: true, subtree: true });
  }

  /* ============================================================
     INIT
     ============================================================ */
  function init() { initHeader(); initScrollReveal(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

})();
