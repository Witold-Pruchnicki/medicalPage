import '../scss/main.scss';

require.context('../images', true, /\.(jpe?g|png|gif|svg)$/i);

/*==================== MENU SHOW Y HIDDEN ====================*/
const header = document.querySelector('.main-header')
const navMenu = document.querySelector('.nav__menu-list');
const menuBtn = document.querySelector('.nav__toggle');
const closeBtn = document.querySelector('.menu-close')
const navLink = document.querySelectorAll('.nav__item')

menuBtn.addEventListener('click', ()=>{
    navMenu.classList.toggle('nav__menu-show');
    menuBtn.classList.toggle('hide')
})
closeBtn.addEventListener('click', ()=>{
    navMenu.classList.remove('nav__menu-show');
    menuBtn.classList.remove('hide')
})

navLink.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('nav__menu-show')
        menuBtn.classList.toggle('hide')
    })
})

window.onscroll = ()=>{
    this.scrollY > 20 ? header.classList.add('sticky') : header.classList.remove('sticky')
}
/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.querySelector('.main-header')
    if (window.scrollY >= 30){
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky')
    }
}
console.log(scrollHeader())
window.addEventListener('scroll', scrollHeader)

// /*==================== SHOW SCROLL TOP ====================*/
// function scrollTop() {
//     const scrollTop = document.querySelector('.scrolltop');
//     if (this.scrollY >= 560) {
//         scrollTop.classList.add('show-scroll')
//     } else {
//         scrollTop.classList.remove('show-scroll')
//     }
// }
//
// window.addEventListener('scroll', scrollTop)
//
//
// /*==================== DARK LIGHT THEME ====================*/
