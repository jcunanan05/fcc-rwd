var Product = function() {
  var burger = document.querySelector('.navbar-burger');
  var navbarMenu = document.querySelector('.navbar-menu');
  var navbarItems = document.querySelectorAll('.navbar-item');

  burger.addEventListener('click', toggleNavbarMenu);

  navbarItems.forEach(function(navbarItem) {
    navbarItem.addEventListener('click', hideNavbarMenu);
  });

  function hideNavbarMenu() {
    navbarMenu.classList.remove('navbar-menu--active');
  }

  function toggleNavbarMenu() {
    navbarMenu.classList.toggle('navbar-menu--active');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  Product();
}, false);