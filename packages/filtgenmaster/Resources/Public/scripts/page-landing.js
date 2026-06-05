/* Handgemacht Studio — Landing Page Scripts */

document.getElementById('scroll-to-versprechen')?.addEventListener('click', function () {
  document.getElementById('versprechen')?.scrollIntoView({ behavior: 'smooth' });
});

/* Testimonials carousel */
(function () {
  var TESTIMONIALS = [
    {
      quote: 'Ich dachte, ich kann das nicht. Jetzt steht meine Vase im Wohnzimmer und alle fragen, wo ich sie gekauft habe.',
      name: 'Sandra K.', meta: '34 · Freiburg · Töpfern',
      pal: { bg: '#c9a37a', mid: '#8b6440', dark: '#5a3f24', light: '#ECEAE2' }
    },
    {
      quote: 'Wir waren zu sechst. Es war kein Restaurantabend — es war besser. Jeder hatte am Ende etwas Eigenes in der Hand.',
      name: 'Lena B.', meta: '28 · Herbolzheim · Linoldruck',
      pal: { bg: '#a8835c', mid: '#6e4d2e', dark: '#3a2614', light: '#E8D9C5' }
    },
    {
      quote: 'Das Holz hat sich angefühlt wie Therapie nach der Schicht. Ich komme wieder — diesmal mit meiner Tochter.',
      name: 'Markus W.', meta: '42 · Herbolzheim · Holzlöffel',
      pal: { bg: '#888780', mid: '#5a594f', dark: '#2C2C2A', light: '#D3D1C7' }
    },
    {
      quote: 'Endlich mal ein Abend, an dem ich nicht aufs Handy geschaut habe. Drei Stunden — und mein Geldbeutel ist fertig.',
      name: 'Julia M.', meta: '26 · Freiburg · Lederwerk',
      pal: { bg: '#b5895a', mid: '#7a5a3c', dark: '#4f3621', light: '#ECEAE2' }
    }
  ];

  function avatarSVG(p, id) {
    return '<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="width:100%;height:100%">' +
      '<defs><radialGradient id="g' + id + '" cx="40%" cy="35%" r="80%">' +
        '<stop offset="0%" stop-color="' + p.bg + '"/>' +
        '<stop offset="60%" stop-color="' + p.mid + '"/>' +
        '<stop offset="100%" stop-color="' + p.dark + '"/>' +
      '</radialGradient></defs>' +
      '<rect width="120" height="120" fill="url(#g' + id + ')"/>' +
      '<path d="M0,120 C20,90 38,82 60,82 C82,82 100,90 120,120 Z" fill="' + p.dark + '" opacity="0.65"/>' +
      '<circle cx="60" cy="52" r="22" fill="' + p.light + '" opacity="0.92"/>' +
      '<circle cx="60" cy="52" r="22" fill="' + p.mid + '" opacity="0.35"/>' +
      '<ellipse cx="52" cy="44" rx="7" ry="9" fill="' + p.light + '" opacity="0.4"/>' +
    '</svg>';
  }

  var slide = document.getElementById('testimonial-slide');
  var dotsEl = document.getElementById('t-dots');
  var idx = 0, interacted = false;

  function render() {
    var t = TESTIMONIALS[idx];
    slide.innerHTML =
      '<div class="testimonial__avatar-wrap">' +
        '<div class="testimonial__avatar">' + avatarSVG(t.pal, idx) + '</div>' +
        '<div class="testimonial__mark" aria-hidden="true">„</div>' +
      '</div>' +
      '<div>' +
        '<blockquote class="testimonial__quote">„' + t.quote + '"</blockquote>' +
        '<div class="testimonial__lehm"></div>' +
        '<div class="testimonial__attrib">' +
          '<span class="testimonial__name">' + t.name + '</span>' +
          '<span class="testimonial__attrib-sep">·</span>' +
          '<span class="testimonial__meta">' + t.meta + '</span>' +
        '</div>' +
      '</div>';

    dotsEl.innerHTML = '';
    TESTIMONIALS.forEach(function (_, i) {
      var btn = document.createElement('button');
      btn.className = 'testimonial__dot' + (i === idx ? ' testimonial__dot--active' : '');
      btn.setAttribute('aria-label', 'Zitat ' + (i + 1));
      btn.addEventListener('click', function () { interacted = true; goTo(i); });
      dotsEl.appendChild(btn);
    });
  }

  function goTo(i) {
    idx = (i + TESTIMONIALS.length) % TESTIMONIALS.length;
    render();
  }

  document.getElementById('t-prev').addEventListener('click', function () { interacted = true; goTo(idx - 1); });
  document.getElementById('t-next').addEventListener('click', function () { interacted = true; goTo(idx + 1); });

  setInterval(function () { if (!interacted) goTo(idx + 1); }, 8000);

  render();
})();
