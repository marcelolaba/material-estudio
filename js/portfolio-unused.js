//sidebar
const navBtn = document.getElementById("nav-btn");
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

// smooth scroll
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
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
  if ($(document).scrollTop() > 50) {
    $(navBar).addClass("shrink");
    document.getElementById("nav-logo").style.height = "2rem";
    for (i = 0; i < y.length; i++) {
      y[i].style.fontSize = "1rem";
    }
    if ($(mobileMenu).hasClass("show-nav")) {
      mobileMenu.classList.remove("show-nav");
      mobileMenu.classList.toggle("show-nav-small");
    }
  } else {
    $(navBar).removeClass("shrink");
    document.getElementById("nav-logo").style.height = "3rem";
    for (i = 0; i < y.length; i++) {
      y[i].style.fontSize = "1.2rem";
    }
    if ($(mobileMenu).hasClass("show-nav-small")) {
      mobileMenu.classList.remove("show-nav-small");
      mobileMenu.classList.toggle("show-nav");
    }
  }
  if ($(document).scrollTop() > 80) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
});
