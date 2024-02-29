const mobileBtn = document.querySelector('#mobile_btn')
const mobileNavBar = document.querySelector('.responsive-navbar')
const navBarResponsive = document.querySelector('.responsive-navbar')

navBarResponsive.addEventListener('click', () => {
    mobileNavBar.classList.toggle('active')
})

mobileBtn.addEventListener('click', () => {
    mobileNavBar.classList.toggle('active')
})

ScrollReveal().reveal('#left_section', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
})
ScrollReveal().reveal('.cardapio-container', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
})
ScrollReveal().reveal('#chef-img', {
    origin: 'left',
    duration: 1000,
    distance: '20%'
})
ScrollReveal().reveal('.comentario-container', {
    origin: 'right',
    duration: 3000,
    distance: '20%'
})

const header = document.querySelector('header');
const sections = document.querySelector('html')
const inicio = document.querySelector('#inicio')
const cardapio = document.querySelector('#cardapio')
const avaliacao = document.querySelector('#avaliacao')
console.log(sections)


document.addEventListener('scroll', () => {
    const scrollYy = window.scrollY;
    let activeSectionIndex = 0
    
    if(scrollYy <= 0) {
        header.style.boxShadow = 'none'
    }else { 
        header.style.boxShadow =  '5px 1px 5px rgba(0, 0, 0, 0.1)'
    }

    const sectionTop = sections.scrollTop;
    console.log(sectionTop)

    if(sectionTop <= 600) {
        inicio.style.color = '#1d1d1d'
        inicio.style.borderBottom = '3px solid #e9a209'

        cardapio.style.color = '#1d1d1dad'
        cardapio.style.borderBottom = ''

        avaliacao.style.color = '#1d1d1dad'
        avaliacao.style.borderBottom = ''
    }
    else if(sectionTop > 600 && sectionTop <= 1100) {
        cardapio.style.color = '#1d1d1d'
        cardapio.style.borderBottom = '3px solid #e9a209'

        avaliacao.style.color = '#1d1d1dad'
        avaliacao.style.borderBottom = ''

        inicio.style.color = '#1d1d1dad'
        inicio.style.borderBottom = ''
    }
    else if (sectionTop > 1100) {
        avaliacao.style.color = '#1d1d1d'
        avaliacao.style.borderBottom = '3px solid #e9a209'

        inicio.style.color = '#1d1d1dad'
        inicio.style.borderBottom = ''

        cardapio.style.color = '#1d1d1dad'
        cardapio.style.borderBottom = ''
    }
});
