const navBtn = document.getElementById("navi-toggle");
const navBackGround = document.getElementById("background-menu");
let = menuIsOpen = false;



navBtn.addEventListener("click", () => {
    if(!menuIsOpen) {
        navBackGround.classList.add("menu-active");
        menuIsOpen = true;
    } else {
        navBackGround.classList.remove("menu-active");
        menuIsOpen = false;
    }

});









