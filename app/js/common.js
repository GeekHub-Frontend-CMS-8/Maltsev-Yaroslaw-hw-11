$(document).on('click', '#openMenu', function () {
    $(this).toggleClass('active');
    $('.menu-list').toggleClass('open');
});

$(document).on('touchstart' && 'touchend', function (e) {
    var container = $(".header__menu");
    if (container.has(e.target).length === 0) {
        $('#openMenu').removeClass('active');
        $('.menu-list').removeClass('open');
    }
});

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
  var slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }  
  slides[slideIndex-1].style.display = "block";  
}