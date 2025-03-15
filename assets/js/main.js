let hamburger = document.getElementById('hamburger');
let collapse = document.getElementById('collapse');

if (hamburger) {
    hamburger.addEventListener('click', function () {
        collapse.classList.toggle('show');
    });
} else {
    console.error("Không tìm thấy phần tử có id='hamberger'");
}