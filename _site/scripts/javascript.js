const hamburger = document.querySelector(".icon");
const navMenu = document.querySelector(".nav-nested");
const navItem = document.querySelector(".nav-item");
var button = document.querySelector(".icon");

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    if (hamburger.classList.contains("active")) {
        navItem.style.height = "100%";
        button.setAttribute("aria-expanded", true);
        navMenu.style.display = "block";
    }
    if (!hamburger.classList.contains("active")) {
        button.setAttribute("aria-expanded", false);
        navMenu.style.display = "none";
    }
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


if (!navMenu.classList.contains("active")) {
    navItem.style.height = "0px";
    button == false
}





