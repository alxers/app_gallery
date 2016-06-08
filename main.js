document.addEventListener('DOMContentLoaded', function(event) {

  // Array.prototype.slice.call(document.querySelectorAll('.item')).indexOf(document.querySelectorAll('.item')[2])

  let slides = Array.prototype.slice.call(document.querySelectorAll('.js-control-button'));
  let descriptionLinks = Array.prototype.slice.call(document.querySelectorAll('.js-description-item'));
  let currentSlide = document.querySelector('.js-is-active');

  document.addEventListener('click', function(e) {

    let slideNum = slides.indexOf(e.target);

    if (e.target.className.match('js-control-button')) {
      goToSlide(slideNum);
    }

    if (e.target.className.match('js-arrow-right')) {
      nextSlide();
    }

    if (e.target.className.match('js-arrow-left')) {
      previousSlide();
    }
    
  });

  function goToSlide(slideNum) {

    removeClassFromAllNodes('js-is-active', slides);
    removeClassFromAllNodes('js-is-visible', descriptionLinks);

    slides[slideNum].classList.add('js-is-active');
    descriptionLinks[slideNum].classList.add('js-is-visible');

    // restartAutoPlay();
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function previousSlide() {
    goToSlide(currentSlide - 1);
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

  // let appLinks = document.querySelectorAll('.control-button');
  // let descriptionLinks = document.querySelectorAll('.description-item');
  // let currentSlide = document.querySelectorAll('.js-is-active')[0];
  // // set to 1 so startSlider clicks to the second slide first time
  // let appLinkNum = 1;

  // const SLIDER_TIMING = 5000;
  // let intId = startSlider();
  
  // document.addEventListener('click', function(e) {
  //   for (let i = 0; i < appLinks.length; i++) {
  //     if (e.target.className.match('js-control-button')) {

  //       // if (e.target.className.match('js-arrow-left')) {
  //       //   appLinkNum += 1;
  //       // }

  //       // if (e.target.className.match('js-arrow-right')) {
  //       //   appLinkNum -= 1;
  //       // }

  //       appLinkNum = parseInt(e.target.className.match(/\d+/g)[0], 10);
  //       descriptionLinks[i].classList.remove('js-is-visible');
  //       descriptionLinks[appLinkNum - 1].classList.add('js-is-visible');

  //       clearInterval(intId);
  //       intId = startSlider();
  //     }
  //   }
  // }, false);

  // function goToSlide(slideNum) {
  //   for (let i = 0; i < appLinks.length; i++) {
  //     if (e.target.className.match('js-control-button')) {

  //       appLinkNum = parseInt(e.target.className.match(/\d+/g)[0], 10);
  //       descriptionLinks[i].classList.remove('js-is-visible');
  //       descriptionLinks[appLinkNum - 1].classList.add('js-is-visible');

  //       clearInterval(intId);
  //       intId = startSlider();
  //     }
  //   }
  // }

  // function startSlider() {
  //   let intervalId = setInterval(function() {
  //     if (appLinkNum < appLinks.length) {
  //       appLinks[appLinkNum].click();
  //     } else {
  //       appLinkNum = 0;
  //       appLinks[appLinkNum].click();
  //     }
  //   }, SLIDER_TIMING);

  //   return intervalId;
  // }

}, false);