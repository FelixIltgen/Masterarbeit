/* Handgemacht Studio — Landing Page Scripts */

document.getElementById('scroll-to-versprechen')?.addEventListener('click', function () {
  document.getElementById('versprechen')?.scrollIntoView({ behavior: 'smooth' });
});

/* Testimonials carousel */
(function () {
  var TESTIMONIALS = [
    {
      quote: 'Ich dachte, ich kann das nicht. Jetzt steht meine Vase im Wohnzimmer und alle fragen, wo ich sie gekauft habe.',
      name: 'Sandra K.', meta: '34 · Töpfern'
    },
    {
      quote: 'Wir waren zu fünft als Freundinnen da und haben mehr gelacht als erwartet. Am Ende hatte jede etwas Eigenes in der Hand. Viel schöner als nur wieder essen zu gehen.',
      name: 'Lena B.', meta: '28 · Linoldruck'
    },
    {
      quote: 'Ich hab mir Holzarbeiten jahrelang nur auf YouTube angeschaut. Hier durfte ich endlich selbst ran. Genau das hat mir gefehlt. Ich komme wieder!',
      name: 'Markus W.', meta: '42 · Holzlöffel'
    },
    {
      quote: 'Klein, persönlich, gut organisiert. Man merkt, dass hier jemand mit Herz dabei ist.',
      name: 'Julia M.', meta: '26 · Silberring'
    }
  ];

  var slide = document.getElementById('testimonial-slide');
  slide.style.gridTemplateColumns = '1fr';
  slide.style.textAlign = 'center';
  slide.style.justifyItems = 'center';

  var dotsEl = document.getElementById('t-dots');
  var idx = 0, interacted = false;

  function render() {
    var t = TESTIMONIALS[idx];
    slide.innerHTML =
      '<div style="text-align:center;width:100%">' +
        '<blockquote class="testimonial__quote" style="text-align:center;margin-left:auto;margin-right:auto">„' + t.quote + '"</blockquote>' +
        '<div class="testimonial__lehm" style="margin:24px auto 16px"></div>' +
        '<div class="testimonial__attrib" style="text-align:center;justify-content:center">' +
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
