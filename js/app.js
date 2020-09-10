//sidebar
const navBtn = document.getElementById("nav-btn");
navBtn.style.paddingTop = "25px";
var menu = document.getElementById("menu");
menu.style.paddingTop = "35px";
const mobileMenu = document.getElementById("mobile-menu");
const navBar = document.getElementsByClassName("navbar-center");

navBtn.addEventListener("click", () => {
  if ($(document).scrollTop() > 50) {
    mobileMenu.classList.toggle("show-nav-small");
  } else {
    mobileMenu.classList.toggle("show-nav");
  }
  navBtn.classList.toggle("change");
});

//slideshow
var slideIndex = 0;
showDivs();
function showDivs() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.opacity = 0;
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.opacity = 1;
  setTimeout(showDivs, 3000); // Change image every 3 seconds
}

// JQuery------------------------------------------//
// smooth scroll
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      if (
        mobileMenu.classList.contains("show-nav") ||
        mobileMenu.classList.contains("show-nav-small")
      ) {
        mobileMenu.classList.remove("show-nav");
        mobileMenu.classList.remove("show-nav-small");
        navBtn.classList.toggle("change");
      }
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

//Srink navbar on scroll
$(window).scroll(function () {
  var y = document.getElementsByClassName("menu-link");
  var logo = document.getElementById("nav-logo");

  if ($(document).scrollTop() > 50) {
    $(navBar).addClass("shrink");
    logo.style.height = "2rem";
    for (i = 0; i < y.length; i++) {
      y[i].style.fontSize = "1rem";
    }
    menu.style.paddingTop = "10px";
    navBtn.style.paddingTop = "0px";
    if ($(mobileMenu).hasClass("show-nav")) {
      mobileMenu.classList.remove("show-nav");
      mobileMenu.classList.toggle("show-nav-small");
    }
  } else {
    $(navBar).removeClass("shrink");
    logo.style.height = "4rem";
    for (i = 0; i < y.length; i++) {
      y[i].style.fontSize = "1.2rem";
    }
    menu.style.paddingTop = "35px";
    navBtn.style.paddingTop = "25px";

    if ($(mobileMenu).hasClass("show-nav-small")) {
      mobileMenu.classList.remove("show-nav-small");
      mobileMenu.classList.toggle("show-nav");
    }
  }
  if ($(document).scrollTop() > 500) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
});
