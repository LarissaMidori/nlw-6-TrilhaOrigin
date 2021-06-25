// DOM Documnet Object Model

/* ABRE E FECHA o menu quando clicar no ícone */

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

/* Quando CLICAR em um item do menu, ESCONDER O MENU */

const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

/* MUDAR O HEADER da página quando der SCROLL */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll',function() {
    if(window.scrollY >= navHeight) {
        // scroll maior que a altura do header
        header.classList.add('scroll')
    } else {
        // menor que a altura do header
        header.classList.remove('scroll')
    }
})

/* SCROLLREVEAL - Mostrar elementos quando der scroll na página */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links
  `,
  { interval: 100 }
)

/* TESTIMONIALS SWIPER SLIDER */

const swiper = new Swiper('.swiper-container', {
   slidesPerView: 1,
   pagination: {
       el: '.swiper-pagination'
   },
   mousewheel: true,
   keyboard: true
  });

