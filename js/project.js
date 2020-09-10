//sidebar
const navBtn = document.getElementById("nav-btn");
navBtn.style.marginTop = "25px";
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
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}
// Thumbnail image controls
function currentSlide(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active-dot";
  if (
    x[slideIndex - 1].classList.contains("vertical") &&
    $(window).width() >= 992
  ) {
    document.getElementById("bleft").style.left = "calc(25% + 1rem)";
    document.getElementById("bright").style.right = "calc(25% + 1rem)";
  } else {
    document.getElementById("bleft").style.left = "1rem";
    document.getElementById("bright").style.right = "1rem";
  }
}
// Modal
// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
var slideIndexM = 1;
showDivsM(slideIndexM);

function plusDivsM(n) {
  showDivsM((slideIndexM += n));
}
// Thumbnail image controls
function currentSlideM(n) {
  showDivsM((slideIndexM = n));
}

function showDivsM(n) {
  var i;
  var x = document.getElementsByClassName("mySlidesM");

  if (n > x.length) {
    slideIndexM = 1;
  }
  if (n < 1) {
    slideIndexM = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[slideIndexM - 1].style.display = "block";

  // if (
  //   x[slideIndex - 1].classList.contains("vertical") &&
  //   $(window).width() >= 992
  // ) {
  //   document.getElementById("bleft").style.left = "calc(25% + 1rem)";
  //   document.getElementById("bright").style.right = "calc(25% + 1rem)";
  // } else {
  //   document.getElementById("bleft").style.left = "1rem";
  //   document.getElementById("bright").style.right = "1rem";
  // }
}

// JQuery------------------------------------------//
// smooth scroll
// $(document).ready(function () {
//   // Add smooth scrolling to all links
//   $("a").on("click", function (event) {
//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//       // Prevent default anchor click behavior
//       event.preventDefault();

//       // Store hash
//       var hash = this.hash;
//       mobileMenu.classList.remove("show-nav");
//       mobileMenu.classList.remove("show-nav-small");
//       navBtn.classList.toggle("change");
//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $("html, body").animate(
//         {
//           scrollTop: $(hash).offset().top,
//         },
//         800,
//         function () {
//           // Add hash (#) to URL when done scrolling (default click behavior)
//           window.location.hash = hash;
//         }
//       );
//     } // End if
//   });
// });

//Srink navbar on scroll
// $(window).scroll(function () {
//   var y = document.getElementsByClassName("menu-link");
//   if ($(document).scrollTop() > 50) {
//     $(navBar).addClass("shrink");
//     document.getElementById("nav-logo").style.height = "2rem";
//     for (i = 0; i < y.length; i++) {
//       y[i].style.fontSize = "1rem";
//     }
//     if ($(mobileMenu).hasClass("show-nav")) {
//       mobileMenu.classList.remove("show-nav");
//       mobileMenu.classList.toggle("show-nav-small");
//     }
//   } else {
//     $(navBar).removeClass("shrink");
//     document.getElementById("nav-logo").style.height = "3rem";
//     for (i = 0; i < y.length; i++) {
//       y[i].style.fontSize = "1.2rem";
//     }
//     if ($(mobileMenu).hasClass("show-nav-small")) {
//       mobileMenu.classList.remove("show-nav-small");
//       mobileMenu.classList.toggle("show-nav");
//     }
//   }
// });
//Srink navbar on scroll
$(window).scroll(function () {
  var y = document.getElementsByClassName("menu-link");
  var menu = document.getElementById("menu");
  var logo = document.getElementById("nav-logo");
  var navBtn = document.getElementById("nav-btn");

  if ($(document).scrollTop() > 50) {
    $(navBar).addClass("shrink");
    document.getElementById("nav-logo").style.height = "2rem";
    for (i = 0; i < y.length; i++) {
      y[i].style.fontSize = "1rem";
    }

    logo.style.marginTop = "0px";
    navBtn.style.marginTop = "0px";
    if ($(mobileMenu).hasClass("show-nav")) {
      mobileMenu.classList.remove("show-nav");
      mobileMenu.classList.toggle("show-nav-small");
    }
  } else {
    $(navBar).removeClass("shrink");
    document.getElementById("nav-logo").style.height = "4rem";
    for (i = 0; i < y.length; i++) {
      y[i].style.fontSize = "1.2rem";
    }

    navBtn.style.marginTop = "25px";
    if ($(window).width() <= 992) {
      logo.style.marginTop = "0px";
    } else {
      logo.style.marginTop = "20px";
    }
    if ($(mobileMenu).hasClass("show-nav-small")) {
      mobileMenu.classList.remove("show-nav-small");
      mobileMenu.classList.toggle("show-nav");
    }
  }
});

var mySlides = document.getElementsByClassName("mySlides");
if ($(window).width() <= 992) {
  for (i = 0; i < mySlides.length; i++) {
    mySlides[i].onclick = null;
  }
}
