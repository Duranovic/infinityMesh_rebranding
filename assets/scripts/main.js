var hamburgerMenuOpenIcon = document.getElementsByClassName("hamburger-menu-icon-open")[0];
var hamburgerMenuCloseIcon = document.getElementsByClassName("hamburger-menu-icon-close")[0];
hamburgerMenuOpenIcon.addEventListener("click", function (e) {
  var menu = document.getElementsByClassName("hamburger-menu")[0];

  menu.style.display = 'block';
  hamburgerMenuCloseIcon.style.display = "block";
  hamburgerMenuOpenIcon.style.display = "none";

});
hamburgerMenuCloseIcon.addEventListener("click", function (e) {
  var menu = document.getElementsByClassName("hamburger-menu")[0];
  menu.style.display = 'none';
  hamburgerMenuCloseIcon.style.display = "none";
  hamburgerMenuOpenIcon.style.display = "block";
});
// Get the header
var header = document.getElementById("header-head");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add event listener on scroll
window.addEventListener("scroll", function () {
  myFunction();
}, false);

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header.getElementsByClassName("header-logo")[0].children[0].setAttribute("src", "/themes/images/infinity-mesh-logo.png");
  } else {
    header.classList.remove("sticky");
    header.getElementsByClassName("header-logo")[0].children[0].setAttribute("src", "/themes/images/header-logo.png");
  }
}

// Slick
$('.slider').slick({
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 2000,
  dots: false,
  arrows: true,
  vertical: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  prevArrow: $('.slick-quotes-arrow-up'),
  nextArrow: $('.slick-quotes-arrow-down'),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
        dots: true,
        arrows: false
      }
    }
  ]
});

$('.slides').slick({
  infinite: true,
  autoplay: true,
  autoplaySpeed: 8000,
  speed: 2000,
  dots: false,
  arrows: true,
  vertical: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $('.slick-arrow-container-left'),
  nextArrow: $('.slick-arrow-container-right'),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
        dots: true,
        arrows: false
      }
    }
  ]
});

// Sal
sal({
  once: false,
  threshold	: 0.5
});

// Custom Input animation on focus and blur
$('.input-container input[type="text"]').on('focus', function(e){
  $(this).parent().css({'box-shadow' : '0 0 10px 2px gainsboro'});
})
$('.input-container input[type="text"]').on('blur', function(e){
  $(this).parent().css({'box-shadow' : 'none'});
})
