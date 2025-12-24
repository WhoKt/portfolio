// slider
let index = 0;
const track = document.getElementById('sliderTrack');
const dots = document.querySelectorAll('#sliderDots span');

setInterval(() => {
    index = (index + 1) % 3;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(d => d.classList.remove('active'));
    dots[index].classList.add('active');
}, 4000);
