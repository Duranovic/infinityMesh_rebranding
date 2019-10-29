var hamburgerMenuOpenIcon = document.getElementsByClassName("hamburger-menu-icon-open")[0];
var hamburgerMenuCloseIcon = document.getElementsByClassName("hamburger-menu-icon-close")[0];
hamburgerMenuOpenIcon.addEventListener("click", function(e){
    var menu = document.getElementsByClassName("hamburger-menu")[0];
    
        menu.style.display = 'block';
        hamburgerMenuCloseIcon.style.display = "block";
        hamburgerMenuOpenIcon.style.display = "none";
    
})
hamburgerMenuCloseIcon.addEventListener("click", function(e){
    var menu = document.getElementsByClassName("hamburger-menu")[0];
        menu.style.display = 'none';
        hamburgerMenuCloseIcon.style.display = "none";
        hamburgerMenuOpenIcon.style.display = "block";

})