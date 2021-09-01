var currentSlide = 0;
let slides = document.getElementsByClassName('mySlides');

function openModal(){
  document.getElementById('modalBox').style.display = 'flex';
}
function closeModal(){
  document.getElementById('modalBox').style.display = 'none';
}

function showCurrentSlide(n){
  currentSlide = n;
  showSlide(currentSlide);
}

function changeSlide(n){
  currentSlide += n;
  showSlide(currentSlide);
}

function showSlide(index) {
  
  if(index > slides.length - 1) currentSlide = 0;
  if(index < 0) currentSlide = slides.length - 1;

  // Hiding all slides
  for(let i = 0; i < slides.length; i++){
    slides[i].style.display = 'none';
  }

  //making a slide visible
  slides[currentSlide].style.display = 'block';


}