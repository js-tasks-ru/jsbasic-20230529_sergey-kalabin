function initCarousel() {
  let carouselInner = document.querySelector('.carousel__inner');
  let arrowRight = document.querySelector(".carousel__arrow_right");
  let arrowLeft = document.querySelector(".carousel__arrow_left");
  let carouselInnerWidth = carouselInner.offsetWidth;
  let countSlide = document.querySelectorAll('.carousel__slide').length;
  console.log(countSlide) //4 слайда
  let activeIndex = 0;

  setArrow(activeIndex, arrowRight, arrowLeft, countSlide);

  arrowRight.addEventListener( "click", () => {
    activeIndex++;
    carouselInner.style.transform = `translateX(-${activeIndex * carouselInnerWidth}px)`;
    setArrow(activeIndex, arrowRight, arrowLeft, countSlide);
  });

  arrowLeft.addEventListener( "click", () => {
    activeIndex--;
    carouselInner.style.transform = `translateX(-${activeIndex * carouselInnerWidth}px)`;
    setArrow(activeIndex, arrowRight, arrowLeft, countSlide);
  });
}

function setArrow(activeIndex, arrowRight, arrowLeft, countSlide) {
  if (activeIndex === 0) {
    arrowLeft.style.display = 'none';
  } else {
    arrowLeft.style.display = '';
  }

  if (activeIndex >= countSlide -1) {
    arrowRight.style.display = 'none';
  } else {
    arrowRight.style.display = '';
  }
}
