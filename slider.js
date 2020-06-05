const slider = {
    buttonPrevious: null,
    buttonNext: null,
    sliderImage: null,

    currentIndex: 0,
    image: [],

    startInitialization: function (elId) {
        let element = document.getElementById(elId);
        this.buttonPrevious = element.querySelector('.buttonPrevious');
        this.buttonNext = element.querySelector('.buttonNext');
        this.sliderImage = element.querySelector('.slide');

        const sliderThis = this;
        this.image.push('https://klike.net/uploads/posts/2019-06/1560838551_1.jpg');
        this.image.push('https://i.ytimg.com/vi/Qq6b3v_0AtM/maxresdefault.jpg');
        this.image.push('https://i.ytimg.com/vi/NYTrF1yQ1u0/maxresdefault.jpg');
        this.image.push('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSo5oACWf92GRRhy30CoSBy0B9i6qlc7vU8OwFBBvqBmq1g-O8u&usqp=CAU');

        this.buttonPrevious.addEventListener('click', function (e) {
            sliderThis.onClickPrevious(e)
        });
        this.buttonNext.addEventListener('click', function (e) {
            sliderThis.onClickNext(e)
        });

        this.sliderImage.src = this.image[this.currentIndex];
        this.buttonPrevious.disabled = true;
    },

    onClickPrevious: function (e) {
        this.buttonNext.disabled = false;
        this.currentIndex--;
        this.sliderImage.src = this.image[this.currentIndex];
        if (this.currentIndex === 0) {
            this.buttonPrevious.disabled = true
        }
    },

    onClickNext: function (e) {
        this.buttonPrevious.disabled = false;
        this.currentIndex++;
        this.sliderImage.src = this.image[this.currentIndex];
        if (this.currentIndex === this.image.length - 1) {
            this.buttonNext.disabled = true
        }
    },
};


// const buttonPrevious = document.querySelector('.buttonPrevious');
// const buttonNext = document.querySelector('.buttonNext');
// const sliderImage = document.querySelector('.slide');
//
// let currentIndex = 0;
// const image = [];
//
// image.push('https://klike.net/uploads/posts/2019-06/1560838551_1.jpg');
//
// sliderImage.src = image[currentIndex];
// buttonPrevious.disabled = true;
//
// function onClickPrevious() {
//     buttonNext.disabled = false;
//     currentIndex--;
//     sliderImage.src = image[currentIndex];
//     if (currentIndex === 0) {
//         buttonPrevious.disabled = true
//     }
// }
//
// function onClickNext() {
//     buttonPrevious.disabled = false;
//     currentIndex++;
//     sliderImage.src = image[currentIndex];
//     if (currentIndex === image.length - 1) {
//         buttonNext.disabled = true
//     }
// }
//
// buttonPrevious.addEventListener('click', onClickPrevious);
// buttonNext.addEventListener('click', onClickNext);