const hamburger     = document.getElementById('hamburger');
const navList       = document.getElementById('nav-list');
const overlay       = document.getElementById('overlay');
const btnClose      = document.getElementById('btn-close');
const themeToggle   = document.getElementById('theme-toggle');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');



/**
 * Aplica o tema no <html> e sincroniza ambos os checkboxes.
 * @param {boolean} isLight - true = light mode
 */
function applyTheme(isLight) {
    document.documentElement.setAttribute('data-theme', isLight ? 'light' : 'dark');
    themeToggle.checked = isLight;
    themeToggleMobile.checked = isLight;
}

applyTheme(true);

// Toggle desktop
themeToggle.addEventListener('change', function () {
    applyTheme(this.checked);
});

// Toggle mobile (dentro do menu)
themeToggleMobile.addEventListener('change', function () {
    applyTheme(this.checked);
});

// =============================
// Menu hambúrguer (mobile)
// =============================

/** Abre o menu lateral */
function openMenu() {
    navList.classList.add('active');
    overlay.classList.add('active');
    hamburger.classList.add('active');
}

/** Fecha o menu lateral */
function closeMenu() {
    navList.classList.remove('active');
    overlay.classList.remove('active');
    hamburger.classList.remove('active');
}

// Abre ao clicar no hambúrguer
hamburger.addEventListener('click', openMenu);

// Fecha ao clicar no botão X dentro do menu
btnClose.addEventListener('click', closeMenu);

// Fecha ao clicar no overlay (fora do menu)
overlay.addEventListener('click', closeMenu);

// Fecha ao clicar em um link do menu
navList.querySelectorAll('.nav-item a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
});
