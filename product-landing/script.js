var Product = function() {
  var burger = document.querySelector('.navbar-burger');
  var navbarMenu = document.querySelector('.navbar-menu');

  burger.addEventListener('click', function() {
    navbarMenu.classList.toggle('navbar-menu--active');
  });
}

document.addEventListener('DOMContentLoaded', function() {
  Product();
}, false);