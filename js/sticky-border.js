const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if(window.scrollY > 40) {
        nav.classList.add("sticky-border");
    }else{
        nav.classList.remove("sticky-border");
    }
})