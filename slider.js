function Slider() {
    this.buttonPrevious = null;
    this.buttonNext = null;
    this.sliderImage = null;

    this.currentIndex = 0;
    this.image = [];

    this.onClickPreviousDisabled = function () {
        this.buttonNext.disabled = false;
        this.currentIndex--;
        if (this.currentIndex === 0) {
            this.buttonPrevious.disabled = true
        } else if (this.currentIndex === - 1) {
            this.currentIndex = 0;
            this.buttonPrevious.disabled = true
        }
        this.sliderImage.src = this.image[this.currentIndex];
    };

    this.onClickNextDisabled = function () {
        this.buttonPrevious.disabled = false;
        this.currentIndex++;
        if (this.currentIndex === this.image.length - 1) {
            this.buttonNext.disabled = true
        } else if (this.currentIndex === this.image.length) {
            this.currentIndex = this.image.length - 1;
            this.buttonNext.disabled = true
        }
        this.sliderImage.src = this.image[this.currentIndex];
    };

    this.onClickPreviousInfinite = function () {
        this.currentIndex--;
        if (this.currentIndex === -1) {
            this.currentIndex = this.image.length - 1
        }
        this.sliderImage.src = this.image[this.currentIndex];
    };

    this.onClickNextInfinite = function () {
        this.buttonPrevious.disabled = false;
        this.currentIndex++;
        if (this.currentIndex === this.image.length) {
            this.currentIndex = 0
        }
        this.sliderImage.src = this.image[this.currentIndex];
    };
}

Slider.prototype.startInitialization = function (elId) {

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
        if (elId === 'sliderDisabled') {
            sliderThis.onClickPreviousDisabled(e)
        } else if (elId === 'sliderInfinite') {
            sliderThis.onClickPreviousInfinite(e)
        }
    });
    this.buttonNext.addEventListener('click', function (e) {
        if (elId === 'sliderDisabled') {
            sliderThis.onClickNextDisabled(e)
        } else if (elId === 'sliderInfinite') {
            sliderThis.onClickNextInfinite(e)
        }
    });

    this.sliderImage.src = this.image[this.currentIndex];
    this.buttonPrevious.disabled = true;
};
