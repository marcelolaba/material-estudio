//declaración de variables globales del DOM/
const navBtn = document.getElementById("nav-btn");
var menu = document.getElementById("menu");
const mobileMenu = document.getElementById("mobile-menu");
const navBar = document.getElementsByClassName("navbar");
var y = document.getElementsByClassName("menu-link");
var logo = document.getElementById("nav-logo");

//abre o cierra el menu mobile según si la barra está grande o chica
//y cambia el icono de barras vericales a cruz
navBtn.addEventListener("click", () => {
  if ($(document).scrollTop() > 50) {
    mobileMenu.classList.toggle("show-nav-small");
  } else {
    mobileMenu.classList.toggle("show-nav");
  }

  // la función toggle, agrega la clase si no está y la saca si está
  navBtn.classList.toggle("change");
});

// JQuery---------------------------------------------------//

//Srink navbar on scroll
$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    //Cuando se detecta el scroll:
    $(navBar).addClass("shrink"); //la barra se achica
    logo.style.height = "2rem"; //el logo se achica
    for (i = 0; i < y.length; i++) {
      y[i].style.fontSize = "1rem"; //los items del menu se achican
    }
    menu.style.paddingTop = "10px"; //el menu se alinea con el logo chico
    navBtn.style.paddingTop = "0px"; //el botón se centra en altura (centrado con el logo chico)
    if ($(mobileMenu).hasClass("show-nav")) {
      //si el menu del mobil para la barra grande está abierto
      mobileMenu.classList.remove("show-nav"); //cierro el men de la barra grande
      mobileMenu.classList.toggle("show-nav-small"); //y activo el menu de la barra chica
    }
  } else {
    //cuando vuelva arriba
    $(navBar).removeClass("shrink"); //la barra vuelve a su posición inicial
    logo.style.height = "4rem"; //el log vuelve a su tamaño inicial
    for (i = 0; i < y.length; i++) {
      y[i].style.fontSize = "1.2rem"; //los items del menu vuelven a su tamaño inicial
    }
    menu.style.paddingTop = "35px"; //el menú se alinea con el logo grande
    navBtn.style.paddingTop = "25px"; //el boton se alinea con el logo grande

    if ($(mobileMenu).hasClass("show-nav-small")) {
      //si el menu del mobil para la barra chica está abierto
      mobileMenu.classList.remove("show-nav-small"); //cierro el men de la barra chica
      mobileMenu.classList.toggle("show-nav"); //y activo el menu de la barra grande
    }
  }
  if ($(document).scrollTop() > 500) {
    //si se scrolleó mucho de la pagina inicial
    document.getElementById("back-to-top").style.display = "block"; //muestro el boton de back to home
  } else {
    //si vuelvo a estar cerca de la pagina inicial
    document.getElementById("back-to-top").style.display = "none"; //escondo el boton de back to home
  }
});
