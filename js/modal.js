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
