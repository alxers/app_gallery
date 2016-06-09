document.addEventListener('DOMContentLoaded', function(event) {

  let controls = Array.prototype.slice.call(document.querySelectorAll('.js-control-button'));
  let slides = Array.prototype.slice.call(document.querySelectorAll('.js-slide'));
  let descriptionLinks = Array.prototype.slice.call(document.querySelectorAll('.js-description-item'));
  let currentSlideNum = slideNum();

  const SLIDER_TIMING = 5000;
  let intId = startSlider();

  document.addEventListener('click', function(e) {

    let clickedSlideNum = controls.indexOf(e.target);

    if (clickedSlideNum >= 0) {
      currentSlideNum = clickedSlideNum;
    } else {
      currentSlideNum = slideNum();
    }

    if (e.target.className.match('js-control-button') && clickedSlideNum >= 0) {
      goToSlide(clickedSlideNum);
    }

    if (e.target.className.match('js-arrow-right') || e.target.parentElement.className.match('js-arrow-right')) {
      nextSlide(currentSlideNum);
    }

    if (e.target.className.match('js-arrow-left') || e.target.parentElement.className.match('js-arrow-left')) {
      previousSlide(currentSlideNum);
    }

  });

  function slideNum() {
    return controls.indexOf(Array.prototype.slice.call(document.querySelectorAll('.js-is-active'))[0]);
  }

  function goToSlide(slide) {

    if (slide >= slides.length) {
      slide = 0;
    }

    if (slide < 0) {
      slide = slides.length - 1;
    }

    removeClassFromAllNodes('js-is-active', controls);
    removeClassFromAllNodes('js-is-visible', slides);
    removeClassFromAllNodes('js-is-visible', descriptionLinks);

    controls[slide].classList.add('js-is-active');
    slides[slide].classList.add('js-is-visible');
    descriptionLinks[slide].classList.add('js-is-visible');

    restartAutoPlay();
  }

  function nextSlide(currentSlideNum) {
    goToSlide(currentSlideNum + 1);
  }

  function previousSlide(currentSlideNum) {
    goToSlide(currentSlideNum - 1);
  }

  function removeClassFromAllNodes(className, nodes) {
    nodes.map(function(node) {
      node.classList.remove(className);
    });
  }

  function restartAutoPlay() {
    clearInterval(intId);
    intId = startSlider();
  }

  function startSlider() {
    let intervalId = setInterval(function() {
      let currentSlide = slideNum();
      nextSlide(currentSlide);
    }, SLIDER_TIMING);

    return intervalId;
  }

}, false);