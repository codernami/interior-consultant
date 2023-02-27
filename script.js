const iconHamburger = document.getElementById('icon-hamburguer');
const navMenu = document.getElementById('nav-menu');

iconHamburger.addEventListener("click", e => {
    iconHamburger.classList.toggle('active')
    navMenu.classList.toggle('menu__show')
})