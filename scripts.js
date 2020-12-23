let currentSlideID = "knoll_slide";
let currentSlide = document.getElementById(currentSlideID);
let body = document.getElementsByTagName('body');
var bg = 1;

function changeSlide(clickedSlide) {
  let newSlideID = clickedSlide.id + "_slide";
  let newSlide = document.getElementById(newSlideID);
  if (newSlideID != currentSlideID) {
    currentSlide.style.display = "none";
    newSlide.style.display = "block";
    currentSlideID = newSlideID;
    currentSlide = newSlide;
  }
  bg++;
  if (bg == 4) {
    bg = 1;
  }

  if (bg == 1) {
    body[0].style.backgroundImage = "url('assets/background.png')"
  } else if (bg == 2) {
    body[0].style.backgroundImage = "url('assets/background2.png')"
  } else if (bg == 3) {
    body[0].style.backgroundImage = "url('assets/background3.png')"
  }
}
