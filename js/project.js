//declaración de variables globales del DOM/
const navBtn = document.getElementById("nav-btn");
var menu = document.getElementById("menu");
const mobileMenu = document.getElementById("mobile-menu");
const navBar = document.getElementsByClassName("navbar-center");

//slideshow
var slideIndex = 1; //indica el slide actual(arranca en 1, no en 0)
showDivs(slideIndex); //llamo a la función con el indice deseado

function plusDivs(n) {
  //función que pasa al slide siguiente (n=1) o anterior (n=-1)
  showDivs((slideIndex += n));
}
// Thumbnail image controls
function currentSlide(n) {
  //función que activa el slide deseado (se sa para los "dots")
  showDivs((slideIndex = n));
}

function showDivs(n) {
  //función que muestra el slide correspondiente al valor de "n"
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > x.length) {
    //si el anterior, era el último y sigue adelante, paso al primero
    slideIndex = 1;
  }
  if (n < 1) {
    //si el anterior era el primero, y sigue para atras, paso al último
    slideIndex = x.length;
  }
  // Recorro todos los slides y los oculto
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; //
  }
  //recorro todos los dots y los desactivo
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  x[slideIndex - 1].style.display = "block"; //muestro el slide elegido
  dots[slideIndex - 1].className += " active-dot"; //activo el dot elegido
  if (
    //si el slide es vertical y la pantalla es grande
    x[slideIndex - 1].classList.contains("vertical") &&
    $(window).width() >= 992
  ) {
    //muevo las flechas al medio
    document.getElementById("bleft").style.left = "calc(25% + 1rem)";
    document.getElementById("bright").style.right = "calc(25% + 1rem)";
  } else {
    //sino, las posiciono en los costados
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

//slideshow del modal
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
}

navBtn.addEventListener("click", () => {
  if ($(document).scrollTop() > 50) {
    mobileMenu.classList.toggle("show-nav-small");
  } else {
    mobileMenu.classList.toggle("show-nav");
  }
  navBtn.classList.toggle("change");
});

//Srink navbar on scroll
$(window).scroll(function () {
  var y = document.getElementsByClassName("menu-link");
  var menu = document.getElementById("menu");
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
});

var mySlides = document.getElementsByClassName("mySlides");
if ($(window).width() <= 992) {
  for (i = 0; i < mySlides.length; i++) {
    mySlides[i].onclick = null;
  }
}
