const buttonPrevious = document.getElementById('buttonPrevious');
const buttonNext = document.getElementById('buttonNext');
const sliderImage = document.querySelector('.slide');

let currentIndex = 0;
const image = [];

image.push('https://klike.net/uploads/posts/2019-06/1560838551_1.jpg');

sliderImage.src = image[currentIndex];

function onClickPrevious() {
    currentIndex--;
    if (currentIndex === -1) {
        currentIndex = image.length - 1
    }
    sliderImage.src = image[currentIndex];
}

function onClickNext() {
    currentIndex++;
    if (currentIndex === image.length) {
        currentIndex = 0
    }
    sliderImage.src = image[currentIndex];
}

buttonPrevious.addEventListener('click', onClickPrevious);
buttonNext.addEventListener('click', onClickNext);