// ── Cursor ──────────────────────────────────────────────────
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

document.querySelectorAll('a, button, .project-card, .skill-item').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    ring.style.width = '60px';
    ring.style.height = '60px';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width = '10px';
    cursor.style.height = '10px';
    ring.style.width = '36px';
    ring.style.height = '36px';
  });
});

// ── Nav scroll ───────────────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// ── Mobile menu ──────────────────────────────────────────────
const toggle = document.getElementById('navToggle');
const menu   = document.getElementById('mobileMenu');
toggle.addEventListener('click', () => menu.classList.toggle('open'));
function closeMobile() { menu.classList.remove('open'); }

// ── Intersection Observer (fade-up + timeline) ────────────────
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up, .timeline-item').forEach(el => io.observe(el));

// ── Projects data ────────────────────────────────────────────
// Localize o array 'const projects' e substitua por este:
// Convenção: Caminhos relativos para subdiretórios mantêm a SPA/Estrutura organizada.
const projects = [
  {
    icon: '🎲',
    title: 'Cara ou Coroa',
    desc: 'Um mini-jogo simples para decidir a sorte, criado com lógica pura de JavaScript.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/briellll/cara-ou-coroa',
    live: './cara-ou-coroa-main/index.html' // Caminho para sua subpasta
  },
  {
    icon: '🚀',
    title: 'Landing Page',
    desc: 'Página de captura moderna com foco em conversão e performance.',
    tags: ['HTML', 'CSS', 'Responsividade'],
    github: 'https://github.com/briellll/landing-page',
    live: './landing-page-main/index.html'
  },
  {
    icon: '🚀',
    title: 'Home Page',
    desc: 'Página moderna com foco em manipulação da Doom para troca de tema.',
    tags: ['HTML', 'CSS', 'Responsividade'],
    github: 'https://github.com/briellll/home-page',
    live: './home-page-main/index.html'
  },
  {
    icon: '💡',
    title: 'Gerador de Conselhos',
    desc: 'Aplicação que consome uma API externa para gerar frases motivacionais (ou não).',
    tags: ['API', 'JavaScript', 'Async'],
    github: 'https://github.com/briellll/Aplicativo-gerador-de-conselhos',
    live: './Aplicativo-gerador-de-conselhos-main/index.html'
  },
  {
    icon: '🎵',
    title: 'Player de Música',
    desc: 'Interface de player musical com controles de reprodução e design refinado.',
    tags: ['JavaScript', 'Audio API', 'CSS'],
    github: 'https://github.com/briellll/player-de-musica',
    live: './player-de-musica-main/index.html'
  },
  {
    icon: '👤',
    title: 'Perfil de Links',
    desc: 'Página de Bio para redes sociais, estilo Linktree, totalmente customizada.',
    tags: ['HTML', 'CSS', 'Mobile-first'],
    github: 'https://github.com/briellll/Perfil-de-links-sociais',
    live: './Perfil-de-links-sociais-main/index.html'
  },
  {
    icon: '🌐',
    title: 'Portfólio Pessoal',
    desc: 'Este mesmo site! Desenvolvido com foco em animações modernas.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/carloscgmorais',
    live: '#'
  }
];

// ABAIXO DISSO, na parte onde cria o HTML do card (no forEach),
// vamos envolver o card em um link para ele ser clicável por inteiro:

const grid = document.getElementById('projectsGrid');
projects.forEach((p, i) => {
  // Criamos um elemento 'a' em vez de 'div' para o card todo ser um link
  const card = document.createElement('a');
  card.href = p.live ? p.live : '#';
  card.target = p.live && p.live !== '#' ? '_blank' : '_self'; // Abre em nova aba se for projeto
  card.className = 'project-card';
  card.style.textDecoration = 'none'; // Evita o sublinhado padrão de links
  card.style.color = 'inherit';
  card.style.transitionDelay = `${i * 0.1}s`;

  card.innerHTML = `
    <div class="project-top">
      <span class="project-icon">${p.icon}</span>
      <div class="project-links">
        <span onclick="event.preventDefault(); window.open('${p.github}', '_blank')" title="GitHub">
          <i class="fab fa-github"></i>
        </span>
        ${p.live && p.live !== '#' ? `<i class="fa fa-external-link-alt"></i>` : ''}
      </div>
    </div>
    <div class="project-title">${p.title}</div>
    <div class="project-desc">${p.desc}</div>
    <div class="project-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
  `;
  grid.appendChild(card);
  io.observe(card);
});

// ── Smooth anchor offset (fixed nav) ─────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  });
});
