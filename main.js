document.addEventListener('DOMContentLoaded', function(event) {

  let appLinks = document.querySelectorAll('.control-button');
  let descriptionLinks = document.querySelectorAll('.description-item');
  let appLinkNum;
  
  document.addEventListener('click', function(e) {
    for (let i = 0; i < appLinks.length; i++) {
      if (e.target.className.indexOf("js-control-button") > 0) {
        appLinkNum = parseInt(e.target.className.match(/\d+/g)[0], 10);
        descriptionLinks[i].classList.remove('js-is-visible');
        descriptionLinks[appLinkNum - 1].classList.add('js-is-visible');
      }
    }
  }, false);

}, false);