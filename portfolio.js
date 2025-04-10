let menuBtn = document.getElementById("menuBtn");
let mob = document.getElementById("mob");
let closeBtn = document.getElementById("closeMenu");

menuBtn.addEventListener("click", menuBtnFunction);
closeBtn.addEventListener("click", closeBtnFunc);

function menuBtnFunction() {
    mob.style.top = "0px";
};

function closeBtnFunc() {
    mob.style.top = "-400px";
};

