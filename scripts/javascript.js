const hamburger = document.querySelector(".nav-hamburger");
const navMenu = document.querySelector(".nav-nested");

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    if(hamburger.classList.contains("active")) {
        navMenu.style.height = "84px";
        }
    else navMenu.style.height = "0px"
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


if(!navMenu.classList.contains("active")) {
    navMenu.style.height = "0px";
    }


