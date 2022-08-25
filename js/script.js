const btn = document.querySelector("#menu-btn");
const btnEl = document.querySelectorAll(".menu-item");
const navEl = document.querySelector("#menu");

btn.addEventListener("click", () => {
    btn.classList.toggle("open");
    navEl.classList.toggle("flex");
    navEl.classList.toggle("hidden");
});

btnEl.forEach(x => {
    x.addEventListener("click", () => {
    navEl.classList.toggle("hidden");
    navEl.classList.toggle("flex");
    btn.classList.toggle("open");
    });
});
