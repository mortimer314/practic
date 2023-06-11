

// generate  mobile menu
const mobileMenuElem = document.querySelector('.mobile-menu')
const mainHeaderMobileMenuElem = document.querySelector('.main-header__mobile-menu')
const closeMobileMenuElem = document.querySelector('.main-header__close-mobile-menu')



mobileMenuElem.addEventListener('click',()=>{
    mainHeaderMobileMenuElem.classList.add("main-header__mobile-menu--active")
})

closeMobileMenuElem.addEventListener('click',()=>{
    mainHeaderMobileMenuElem.classList.remove("main-header__mobile-menu--active")
})

mainHeaderMobileMenuElem.addEventListener('click', event =>{
    if(event.target.nextSibling.className){  
        event.target.nextSibling.classList.toggle("main-header__mobile-menu-dropdown--active")
    }
})