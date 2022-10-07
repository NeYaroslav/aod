var swiper = new Swiper(".mySwiper", {
  	loop: true,
	autoHeight: true,
	pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


const burger = document.querySelector(".header__burger")
const links = document.querySelectorAll(".header__nav__menu__link a")
const body = document.querySelector("body")

burger.addEventListener("click", ()=>{
	body.classList.toggle("show_menu")
})


for(let index = 0; index < links.length; index++){
    links[index].addEventListener("click", ()=>{
        if(body.classList.contains("show_menu")){
            body.classList.remove("show_menu")
        }
    })
}



window.addEventListener("scroll", ()=> {
    if(!scrollY == 0) {
        document.querySelector('.go__up').classList.add('show')
    }
    else {
        document.querySelector('.go__up').classList.remove('show')
    }
})



