/* ============ Mintmango interactions ============ */
(() => {
  // --- Room grid (hero) ---
  const grid = document.querySelector('.room-grid');
  if (grid) {
    const states = ['is-clean','is-dirty','is-inprog',''];
    const weights = [.45,.25,.15,.15];
    const pick = () => {
      const r = Math.random(); let acc = 0;
      for (let i=0;i<weights.length;i++) { acc += weights[i]; if (r < acc) return states[i]; }
      return '';
    };
    const rooms = [];
    for (let i=0;i<32;i++) {
      const el = document.createElement('div');
      el.className = 'rm ' + pick();
      const n = 400 + i + 1;
      el.textContent = n;
      grid.appendChild(el);
      rooms.push(el);
    }
    // Animate state flips
    setInterval(() => {
      const el = rooms[Math.floor(Math.random()*rooms.length)];
      el.className = 'rm ' + pick();
    }, 1200);
  }

  // --- Nav shadow on scroll ---
  const nav = document.getElementById('nav');
  const onScroll = () => nav && nav.classList.toggle('is-scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // --- Reveal on scroll ---
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // --- KPI count-up ---
  const kpiIo = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const b = e.target.querySelector('b[data-count]');
      if (!b || b.dataset.done) return;
      b.dataset.done = '1';
      const target = parseFloat(b.dataset.count);
      const suffix = b.dataset.suffix || '';
      const dur = 1600;
      const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = Math.floor(target * eased);
        b.textContent = val + (p === 1 ? suffix : '');
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      kpiIo.unobserve(e.target);
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('.kpi').forEach(el => kpiIo.observe(el));

  // --- Parallax on hero stage ---
  const scene = document.getElementById('stage-scene');
  if (scene && window.matchMedia('(min-width: 961px)').matches) {
    const stage = scene.parentElement;
    stage.addEventListener('mousemove', (e) => {
      const r = stage.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      scene.style.transform = `rotateX(${8 - py*8}deg) rotateY(${-14 + px*10}deg) rotateZ(1deg)`;
    });
    stage.addEventListener('mouseleave', () => {
      scene.style.transform = '';
    });
  }

  // --- Occupancy flicker ---
  const occ = document.getElementById('occ');
  if (occ) {
    setInterval(() => {
      const v = 82 + Math.floor(Math.random()*8);
      occ.textContent = v;
      const bar = document.querySelector('.panel__meta .bar__fill');
      if (bar) bar.style.width = v + '%';
    }, 2800);
  }

  // --- Smooth anchor scroll (already via CSS but offset for nav) ---
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const t = document.querySelector(id);
      if (!t) return;
      e.preventDefault();
      const y = t.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });

  // --- Demo button scrolls to dashboard preview ---
  const btnDemo = document.getElementById('btn-demo');
  if (btnDemo) btnDemo.addEventListener('click', () => {
    document.getElementById('producto').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // ============ TWEAKS ============
  const panel = document.getElementById('tweaks');
  const closeBtn = document.getElementById('tweaks-close');

  function applyTweaks(t) {
    document.body.setAttribute('data-theme', t.theme);
    document.body.setAttribute('data-intensity', t.intensity);
    document.body.setAttribute('data-hero', t.hero);
    document.body.setAttribute('data-motion', t.motion);
    // Update segmented controls
    panel && panel.querySelectorAll('.seg').forEach(seg => {
      const k = seg.dataset.key;
      seg.querySelectorAll('button').forEach(b => b.classList.toggle('is-active', b.dataset.v === t[k]));
    });
    // Language stub: swap nav tag
    const tag = document.querySelector('.nav__tag');
    if (tag) tag.textContent = t.lang;
  }
  applyTweaks(window.__TWEAKS__);

  panel && panel.querySelectorAll('.seg').forEach(seg => {
    seg.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-v]');
      if (!btn) return;
      const key = seg.dataset.key;
      window.__TWEAKS__[key] = btn.dataset.v;
      applyTweaks(window.__TWEAKS__);
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [key]: btn.dataset.v } }, '*');
    });
  });

  window.addEventListener('message', (e) => {
    const d = e.data || {};
    if (d.type === '__activate_edit_mode') panel.hidden = false;
    else if (d.type === '__deactivate_edit_mode') panel.hidden = true;
  });
  closeBtn && closeBtn.addEventListener('click', () => {
    panel.hidden = true;
    window.parent.postMessage({ type: '__deactivate_edit_mode' }, '*');
  });

  // Announce availability AFTER listener is registered
  window.parent.postMessage({ type: '__edit_mode_available' }, '*');
})();
