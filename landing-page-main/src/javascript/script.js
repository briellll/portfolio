const btnMobile = document.getElementById('mobile_btn')
const mobileMenu = document.getElementById('mobile_menu')

btnMobile.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('active')

    const icon = btnMobile.querySelector('i');

    if (icon.classList.contains('fa-bars')){
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-x');
    } else {
        icon.classList.remove('fa-x');
        icon.classList.add('fa-bars');
    }

})

function scrollAnimation(){
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');
    const header = document.querySelector('header');

    window.addEventListener('scroll', function (){

        //animação de sombra no header
        const scrollPosition = window.scrollY - header.offsetHeight;
        if (scrollPosition <= 0){
            header.classList.remove('header-move');
        } else {
            header.classList.add('header-move')
        }

        //animação de cor no bottom dos botoes da nav
        const scroll = window.scrollY;
        let activeSectionIndex = 0;

        sections.forEach((section,i) =>{
            const sectionTop = section.offsetTop - 96;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scroll >= sectionTop && scroll < sectionBottom){
                activeSectionIndex = i;
            }
        });

        navItems.forEach(item => item.classList.remove('active'))

        if(navItems[activeSectionIndex]){
            navItems[activeSectionIndex].classList.add('active');
        }

        //animacao ao scrollar a pagina


    })
}

function animatePage(){

    ScrollReveal().reveal('#cta', {
            origin: 'left',
            duration: 2000,
            distance: '20%'
        });

        ScrollReveal().reveal('.dish', {
            origin: 'left',
            duration: 2000,
            distance: '20%'
        });

        ScrollReveal().reveal('#testimonial_chef', {
            origin: 'left',
            duration: 1000,
            distance: '20%'
        });

        ScrollReveal().reveal('.feedback', {
            origin: 'right',
            duration: 1000,
            distance: '20%'
        });

}




document.addEventListener('DOMContentLoaded', ()=>{
    scrollAnimation();
    animatePage();
})