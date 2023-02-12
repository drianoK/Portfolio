const navBtn = document.getElementById("navi-toggle");
const navBackGround = document.getElementById("background-menu");
const btnIcon = document.querySelector(".navigation__icon");
const moveToSection = document.querySelectorAll(".navbar__item")
let = menuIsOpen = false;



navBtn.addEventListener("click", () => {
    if(!menuIsOpen) {
        navBackGround.classList.add("menu-active");
        btnIcon.classList.add("navigation__icon--hamburger");
        menuIsOpen = true;
    } else {
        navBackGround.classList.remove("menu-active");
        btnIcon.classList.remove("navigation__icon--hamburger");
        menuIsOpen = false;
    }

});


moveToSection.forEach(n => n.addEventListener("click", () => {
        navBackGround.classList.remove("menu-active");
        btnIcon.classList.remove("navigation__icon--hamburger");
}))



