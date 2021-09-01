var slides = document.querySelectorAll(".slideshow .slidesContainer .slide");
var slideIndex = 0;
showSlide(slideIndex);
let x = setInterval(() => {
  slideIndex++;
  showSlide(slideIndex);
}, 2000);

var changeSlide = function (n) {
  slideIndex += n;
  showSlide(slideIndex);
};
function showSlide(index) {
  if (index > slides.length - 1) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
  // slides[slideIndex].classList.add('slideActive');
}

var trans = 0;
var new_prod = 0;
var brand_trans = 0;
var width = 0;
var elem;
function slideRight(n) {
  elem = document.querySelector(".shop .forScroll");
  width = elem.scrollWidth / 10;
  if (n == 1) trans += width;
  if (n == -1) trans -= width;
  trans = translate(trans);
  elem.scrollLeft = trans;
}
function newProdRight(n) {
  elem = document.querySelector(".new-p .forScroll");
  width = elem.scrollWidth / 6;
  if (n == 1) new_prod += width;
  if (n == -1) new_prod -= width;
  new_prod = translate(new_prod);
  elem.scrollLeft = new_prod;
}
function brandRight(n) {
  elem = document.querySelector(".brand-slide .forScroll");
  width = elem.scrollWidth / 7;
  if (n == 1) brand_trans += width;
  if (n == -1) brand_trans -= width;
  brand_trans = translate(brand_trans);
  elem.scrollLeft = brand_trans;
}
function translate(pos) {
  if(window.innerWidth > 600){
    if (pos + 1 > (elem.scrollWidth - width*2.9)) pos = 0;
    else if (pos < 0) pos = (elem.scrollWidth - 2.9*width);
  } else {
    if (pos + 1 > (elem.scrollWidth)) pos = 0;
    else if (pos < 0) pos = (elem.scrollWidth - width);
  }
  // console.log(pos, elem.scrollWidth)
  return pos;
}
