const icon  = document.querySelector('.icon')
let search = document.querySelector('.search')
icon.onclick = function(){
    search.classList.toggle('active')
}

const menuIcon  = document.querySelector('.fa-bars')
let header__nav = document.querySelector('.header__nav')
menuIcon.onclick = function(){
    header__nav.classList.toggle('active')
}

const chevronDown = document.querySelector('.cat__info')
let cat__text = document.querySelector('.cat__text')
chevronDown.onclick = function(){
    cat__text.classList.toggle('active')
}
