//slideshow automático//
var slideIndex = 0; //indica el slide actual(arranca en 1, no en 0)
showDivs();
function showDivs() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  // Recorro todos los slides y los oculto
  for (i = 0; i < x.length; i++) {
    x[i].style.opacity = 0;
  }
  // paso al siguiente slide
  slideIndex++;
  //Si el anterior era el último, paso al primero
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  //muestro el slide actual
  x[slideIndex - 1].style.opacity = 1;
  //pongo un timer en 3s para que se repita la función
  setTimeout(showDivs, 3000);
}
