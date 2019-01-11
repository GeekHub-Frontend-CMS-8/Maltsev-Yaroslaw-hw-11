//menu
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

//Slider 1

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
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//Slider 2

var sliderNoArrowsIndex = 1;
showSlidesNoArrows(sliderNoArrowsIndex);

function plusSlidesNoArrows(x) {
  showSlidesNoArrows(sliderNoArrowsIndex += x);
}

function currentSlideNoArrows(x) {
  showSlidesNoArrows(sliderNoArrowsIndex = x);
}

function showSlidesNoArrows(x) {
  var a;
  var slidesNoArrows = document.getElementsByClassName("mySlides--no-arrows");
  var dots = document.getElementsByClassName("dot");
  if (x > slidesNoArrows.length) {sliderNoArrowsIndex = 1}    
  if (x < 1) {sliderNoArrowsIndex = slidesNoArrows.length}
  for (a = 0; a < slidesNoArrows.length; a++) {
      slidesNoArrows[a].style.display = "none";  
  }
  for (a = 0; a < dots.length; a++) {
      dots[a].className = dots[a].className.replace(" active", "");
  }
  slidesNoArrows[sliderNoArrowsIndex-1].style.display = "block";  
  dots[sliderNoArrowsIndex-1].className += " active";
}

//Portfolio-filter
/*
var $galleryList = $('.gallery__list').photos({
  itemSelector: '.gallery__item',
  layoutMode: 'fitRows'
});
// bind filter button click
$('.filters-button-group').on( 'click', 'portfolio-button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $galleryList.photos({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
*/
//Read more Button

function readMoreClick(){
	document.location.href ="post.html"
}

// scroll to anchors