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
        dots: true
      }
    }
  ]
});
sal({
  once: false,
  threshold	: 0.5
});

$('.input-container input[type="text"]').on('focus', function(e){
  $(this).parent().css({'box-shadow' : '0 0 10px 2px gainsboro'});
})
$('.input-container input[type="text"]').on('blur', function(e){
  $(this).parent().css({'box-shadow' : 'none'});
})

/*
if(window.outerWidth < 1025)
{
  if(window.outerWidth < 575)
  {
    if(window.outerWidth < 421)
    {
      if(window.outerWidth < 330)
      {
        $(".article-container").parent().parent().parent().height($('.someClass').outerHeight());
      }
      else{
        $(".article-container").parent().parent().parent().height($('.someClass').outerHeight());
      }  
    }
    else{
      $(".article-container").parent().parent().parent().height($('.someClass').outerHeight());
    }
  }
  else{
    console.log("IPAD PRO");
    $(".article-container").parent().parent().parent().height($('.someClass').outerHeight());
  }
}
else{
  $(".article-container").parent().parent().parent().height($('.someClass').outerHeight());
}*/

window.setInterval(function(){
if(window.outerWidth >= 1450)
{
  $(".article-container").parent().parent().parent().height($('.absolute-container').outerHeight());
}else{
  $(".article-container").parent().parent().parent().height('auto');
}
}, 10);
