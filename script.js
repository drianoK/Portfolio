const checkBox = document.getElementById("navi-toggle");
const navBackGround = document.getElementById("background-menu");
const moveToSection = document.getElementById("SectionMove");
let = menuIsOpen = false;



checkBox.addEventListener("click", () => {
    if(!menuIsOpen) {
        navBackGround.classList.add("menu-active");
        menuIsOpen = true;
    } else {
        navBackGround.classList.remove("menu-active");
        menuIsOpen = false;
    }

});

moveToSection.addEventListener("click", () => {
    if(menuIsOpen = true) {
        navBackGround.classList.remove("menu-active");
        menuIsOpen = false;
    } else {
        menuIsOpen = false;
    }
})







