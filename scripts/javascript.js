const hamburger = document.querySelector(".icon");
const navMenu = document.querySelector(".nav-nested");
var button = document.querySelector(".icon");

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    if(hamburger.classList.contains("active")) {
        navMenu.style.height = "84px";
        button.setAttribute("aria-expanded", true);
        }
    else {
        navMenu.style.height = "0px";
        button.setAttribute("aria-expanded", false)
    }
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


if(!navMenu.classList.contains("active")) {
    navMenu.style.height = "0px";
    button == false
    }


