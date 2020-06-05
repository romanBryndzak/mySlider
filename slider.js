const sliderObject = {
    sliderCreate: function () {
        return {
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

                this.buttonPrevious.addEventListener('click', function (e) {
                    if(elId === 'sliderDisabled'){
                        sliderThis.onClickPreviousDisabled(e)
                    } else if (elId ==='sliderInfinite')
                    {sliderThis.onClickPreviousInfinite(e)}
                });
                this.buttonNext.addEventListener('click', function (e) {
                    if(elId === 'sliderDisabled'){
                        sliderThis.onClickNextDisabled(e)
                    } else if (elId ==='sliderInfinite')
                    {sliderThis.onClickNextInfinite(e)}
                });

                this.sliderImage.src = this.image[this.currentIndex];
                this.buttonPrevious.disabled = true;
            },

            onClickPreviousDisabled: function () {
                this.buttonNext.disabled = false;
                this.currentIndex--;
                this.sliderImage.src = this.image[this.currentIndex];
                if (this.currentIndex === 0) {
                    this.buttonPrevious.disabled = true
                }
            },

            onClickNextDisabled: function () {
                this.buttonPrevious.disabled = false;
                this.currentIndex++;
                this.sliderImage.src = this.image[this.currentIndex];
                if (this.currentIndex === this.image.length - 1) {
                    this.buttonNext.disabled = true
                }
            },
            onClickPreviousInfinite: function () {
                this.currentIndex--;
                if (this.currentIndex === -1) {
                    this.currentIndex = this.image.length - 1
                }
                this.sliderImage.src = this.image[this.currentIndex];
            },

            onClickNextInfinite: function () {
                this.buttonPrevious.disabled = false;
                this.currentIndex++;
                if (this.currentIndex === this.image.length) {
                    this.currentIndex = 0
                }
                this.sliderImage.src = this.image[this.currentIndex];
            },
        }
    }
};
