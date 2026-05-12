(() => {
  // --- Navbar scroll ---
  const nav = document.getElementById('nav');
  const onScroll = () => nav && nav.classList.toggle('is-scrolled', window.scrollY > 10);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // --- Mobile hamburger ---
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('is-open');
      mobileMenu.classList.toggle('is-open', open);
      mobileMenu.setAttribute('aria-hidden', String(!open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('is-open');
        mobileMenu.classList.remove('is-open');
        mobileMenu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Reveal on scroll ---
  const io = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (!e.isIntersecting) return;
      const delay = e.target.closest('.problema__grid, .features__grid, .roles__grid, .ia__grid, .tipos__grid, .stack__grid')
        ? Array.from(e.target.parentElement.children).indexOf(e.target) * 80
        : 0;
      setTimeout(() => e.target.classList.add('is-in'), delay);
      io.unobserve(e.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // --- Smooth anchor scroll with nav offset ---
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (!id || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });

  // --- Demo button scrolls to features ---
  const btnDemo = document.getElementById('btn-demo');
  if (btnDemo) {
    btnDemo.addEventListener('click', () => {
      const target = document.getElementById('como-funciona');
      if (target) {
        const y = target.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  }

  // --- Apply tipo-badge custom colors from inline CSS vars ---
  document.querySelectorAll('.tipo-badge[style]').forEach(el => {
    const bg = el.style.getPropertyValue('--tipo-bg');
    const border = el.style.getPropertyValue('--tipo-border');
    const textColor = el.style.getPropertyValue('--tipo-text');
    if (bg) el.style.backgroundColor = bg;
    if (border) el.style.borderColor = border;
    if (textColor) {
      el.querySelectorAll('strong').forEach(s => s.style.color = textColor);
    }
  });

  // --- Contact form ---
  const form = document.getElementById('cta-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const data = new FormData(form);
      const nombre = data.get('nombre')?.toString().trim();
      const email = data.get('email')?.toString().trim();
      const hotel = data.get('hotel')?.toString().trim();

      if (!nombre || !email || !hotel) {
        const missing = form.querySelector('[required]:invalid') || form.querySelector('[required]');
        if (missing) missing.focus();
        return;
      }

      // Show success state
      form.style.display = 'none';
      const success = document.createElement('div');
      success.className = 'form-success';
      success.style.display = 'block';
      success.innerHTML = `
        <div style="font-size:40px;margin-bottom:14px">🎉</div>
        <h3>¡Solicitud recibida!</h3>
        <p>Te contactaremos en menos de 24 horas, ${nombre.split(' ')[0]}.</p>
      `;
      form.parentElement.appendChild(success);
    });
  }

  // --- Animated room card cycling in phone mockup ---
  const roomCards = document.querySelectorAll('.room-card');
  if (roomCards.length) {
    const states = [
      { cls: 'room-card--departure', status: 'Pendiente' },
      { cls: 'room-card--prearrival', status: 'Asignada' },
      { cls: 'room-card--inprogress', status: 'En progreso' },
      { cls: 'room-card--completed', status: 'Completada ✓' },
      { cls: 'room-card--stayover', status: 'Pendiente' },
    ];
    setInterval(() => {
      const card = roomCards[Math.floor(Math.random() * roomCards.length)];
      const state = states[Math.floor(Math.random() * states.length)];
      card.className = 'room-card ' + state.cls;
      const statusEl = card.querySelector('.room-card__status');
      if (statusEl) {
        statusEl.className = 'room-card__status' + (state.cls === 'room-card--inprogress' ? ' room-card__status--live' : '');
        statusEl.innerHTML = state.cls === 'room-card--inprogress'
          ? '<span class="live-dot"></span>En progreso'
          : state.status;
      }
    }, 2000);
  }
})();
