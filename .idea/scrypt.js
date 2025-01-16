let list = document.querySelector('#main_slider .list');
let items = document.querySelectorAll('#main_slider .list .item');
let dots = document.querySelectorAll('#main_slider .dots li');
let prev = document.getElementById('prev');
let next  = document.getElementById('next');

let active = 0;
let lenghtItem = items.length - 1;

next.onclick = function () {
    if(active + 1 > lenghtItem) {
        active = 0;
    } else {
        active = active + 1;
    }
    reloadSlider();
}
prev.onclick = function () {
    if(active - 1 < 0) {
        active = 2;
    } else {
        active = active - 1;
    }
    reloadSlider();
}
function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('#main_slider .dots li.active')
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => {next.click()}, 3000);
}
dots.forEach((li, key) => {
    li.addEventListener('click', function (){
        active = key;
        reloadSlider()
    })
})