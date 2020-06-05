const buttonPrevious = document.getElementById('buttonPrevious');
const buttonNext = document.getElementById('buttonNext');
const sliderImage = document.querySelector('.slide');

let currentIndex = 0;
const image = [];

image.push('https://klike.net/uploads/posts/2019-06/1560838551_1.jpg');

sliderImage.src = image[currentIndex];
buttonPrevious.disabled = true;

function onClickPrevious() {
    buttonNext.disabled = false;
    currentIndex--;
    sliderImage.src = image[currentIndex];
    if (currentIndex === 0) {
        buttonPrevious.disabled = true
    }
}

function onClickNext() {
    buttonPrevious.disabled = false;
    currentIndex++;
    sliderImage.src = image[currentIndex];
    if (currentIndex === image.length - 1) {
        buttonNext.disabled = true
    }
}

buttonPrevious.addEventListener('click', onClickPrevious);
buttonNext.addEventListener('click', onClickNext);