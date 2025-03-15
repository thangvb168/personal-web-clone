document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const collapse = document.getElementById("collapse");

    hamburger.addEventListener("click", function () {
        collapse.classList.toggle("show");
    });

    document.addEventListener("click", function (event) {
        if (!hamburger.contains(event.target) && !collapse.contains(event.target)) {
            collapse.classList.remove("show");
        }
    });
});
