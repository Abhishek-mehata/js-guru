const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const wrapper = document.querySelector('.img-wrapper');
const imgs = document.querySelectorAll('.img-wrapper img');
console.log(imgs.length)
let idx = 0;

function showImg() {
    if (idx >= imgs.length) idx = 0; // If index exceeds image count, reset to 0
    if (idx < 0) idx = imgs.length - 1; // If index is less than 0, move to last image
    wrapper.style.transform = `translateX(-${idx * 100}%)`; // Move images
}



next.addEventListener('click', () => {
    idx++;
    showImg();
});

prev.addEventListener('click', () => {
    idx--;
    showImg();
});

setInterval(() => {
    idx++;
    showImg();
}, 3000);

showImg();
