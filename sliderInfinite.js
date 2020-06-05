const sliderInfinite = {
    buttonPrevious: null,
    buttonNext: null,
    sliderImage: null,

    currentIndex: 0,
    image: [],

    startInitialization: function (elId) {
        let elSelector = '#' + elId;
        let element = document.querySelector(elSelector);
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
        this.currentIndex--;
        if (this.currentIndex === -1) {
            this.currentIndex = this.image.length - 1
        }
        this.sliderImage.src = this.image[this.currentIndex];
    },

    onClickNext: function (e) {
        this.buttonPrevious.disabled = false;
        this.currentIndex++;
        if (this.currentIndex === this.image.length) {
            this.currentIndex = 0
        }
        this.sliderImage.src = this.image[this.currentIndex];
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
//
// function onClickPrevious() {
//     currentIndex--;
//     if (currentIndex === -1) {
//         currentIndex = image.length - 1
//     }
//     sliderImage.src = image[currentIndex];
// }
//
// function onClickNext() {
//     currentIndex++;
//     if (currentIndex === image.length) {
//         currentIndex = 0
//     }
//     sliderImage.src = image[currentIndex];
// }
//
// buttonPrevious.addEventListener('click', onClickPrevious);
// buttonNext.addEventListener('click', onClickNext);