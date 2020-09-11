//slideshow
var x = document.getElementsByClassName("mySlides");
//var dots = document.getElementsByClassName("dot");
const bLeft = document.getElementById("bleft");
const bRight = document.getElementById("bright");

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
  //   var x = document.getElementsByClassName("mySlides");
  //   var dots = document.getElementsByClassName("dot");
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
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active-dot", "");
  // }
  x[slideIndex - 1].style.display = "block"; //muestro el slide elegido

  //dots[slideIndex - 1].className += " active-dot"; //activo el dot elegido
  if (
    //si el slide es vertical y la pantalla es grande
    x[slideIndex - 1].classList.contains("vertical") &&
    $(window).width() >= 992
  ) {
    //muevo las flechas al medio
    // document.getElementById("bleft").style.left = "calc(25% + 1rem)";
    // document.getElementById("bright").style.right = "calc(25% + 1rem)";
    bLeft.style.left = "calc(25% + 1rem)";
    bRight.style.right = "calc(25% + 1rem)";
  } else {
    //sino, las posiciono en los costados
    // document.getElementById("bleft").style.left = "1rem";
    // document.getElementById("bright").style.right = "1rem";
    bLeft.style.left = "1rem";
    bRight.style.right = "1rem";
  }
}
var mySlides = document.getElementsByClassName("mySlides");
if ($(window).width() <= 992) {
  for (i = 0; i < mySlides.length; i++) {
    mySlides[i].onclick = null;
  }
}
