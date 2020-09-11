const myModal = document.getElementById("myModal");
var dots = document.getElementsByClassName("dot");

// Open the Modal
function openModal() {
  myModal.style.display = "block";
}
// Close the Modal
function closeModal() {
  myModal.style.display = "none";
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
    //x[i].style.opacity = 0;
  }
  //recorro todos los dots y los desactivo
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  x[slideIndexM - 1].style.display = "block";
  //x[slideIndex - 1].style.opacity = 1;
  dots[slideIndexM - 1].className += " active-dot"; //activo el dot elegido
}
