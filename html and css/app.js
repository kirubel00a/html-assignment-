var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var info = document.getElementsByClassName("information");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("active");  
    }
    for (i = 0; i < info.length; i++) {
        info[i].style.display = "none";  
    }
    slides[slideIndex - 1].classList.add("active");
    info[slideIndex-1].style.display = "block";
    updateSlidePosition();
}
function updateSlidePosition() {
  var container = document.querySelector('.slideshow_container');
  var activeSlide = document.querySelector('.slide.active');
  var scrollLeft = activeSlide.offsetLeft - (container.offsetWidth - activeSlide.offsetWidth) / 2;
  container.scrollLeft = scrollLeft;
}
