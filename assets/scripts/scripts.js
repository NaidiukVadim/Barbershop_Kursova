const burgerMenuDesk = document.getElementById('burgerMenuDesk')
const openIcon = document.getElementById('openIcon')
const closeIcon = document.getElementById('closeIcon')
const deskMenu = document.getElementById('deskMenu')
const deskMenuBurger = document.getElementById('deskMenuBurger')

burgerMenuDesk.addEventListener('click', () => {
    openIcon.classList.toggle('d-none')
    closeIcon.classList.toggle('d-none')
    deskMenu.classList.toggle('desktop-menu__open')
    deskMenuBurger.classList.toggle('desktop-menu-burger__open')
})