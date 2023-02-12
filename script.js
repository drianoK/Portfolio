const checkBox = document.getElementById("navi-toggle");
const navBackGround = document.getElementById("background-menu");
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









