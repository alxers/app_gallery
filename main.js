document.addEventListener('DOMContentLoaded', function(event) {

  let appLinks = document.querySelectorAll('.control-button');
  let descriptionLinks = document.querySelectorAll('.description-item');
  let appLinkNum;

  let intId = startSlider();
  
  document.addEventListener('click', function(e) {
    for (let i = 0; i < appLinks.length; i++) {
      if (e.target.className.indexOf("js-control-button") > 0) {
        appLinkNum = parseInt(e.target.className.match(/\d+/g)[0], 10);
        descriptionLinks[i].classList.remove('js-is-visible');
        descriptionLinks[appLinkNum - 1].classList.add('js-is-visible');

        clearInterval(intId);
        intId = startSlider();
      }
    }
  }, false);

  function startSlider() {
    let intervalId = setInterval(function() {
      if (appLinkNum < appLinks.length) {
        appLinks[appLinkNum].click();
      } else {
        appLinkNum = 0;
        appLinks[appLinkNum].click();
      }
    }, 5000);

    return intervalId;
  }

}, false);