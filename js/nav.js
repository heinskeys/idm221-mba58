document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.getElementById('navlinks');

  menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('show');
  });
});
