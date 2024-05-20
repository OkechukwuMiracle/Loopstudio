const hamburger1 = document.querySelector ('.hamburger-container-1')
const hamburger2 = document.querySelector ('.hamburger-container-2')
const menu = document.querySelector('.menu')
const section_1 = document.querySelector('.section_1')

hamburger1.addEventListener('click', ()=> {
    hamburger1.classList.add('invisible')  
    hamburger2.classList.add('visible')
    menu.classList.toggle('visible')
})

hamburger2.addEventListener('click', ()=> {
    hamburger1.classList.remove('invisible')
    hamburger2.classList.remove('visible')
    menu.classList.toggle('visible')
} )