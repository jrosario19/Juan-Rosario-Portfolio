const mobileMenuButton = document.querySelector('.menu-button');
const mobileMenuOptions = document.querySelector('.navbar-items');
const navBarItems = document.querySelectorAll('.Nav-Item');
const logo = document.querySelector('.logo');

mobileMenuButton.addEventListener('click', () => {
  console.log('Button Clicked');
  logo.classList.toggle('logo-invisible');
  mobileMenuButton.classList.toggle('menu-button-open');
  mobileMenuOptions.classList.toggle('visible-mobilemenu');
});
navBarItems.forEach((item) => {
  item.addEventListener('click', () => {
    logo.classList.toggle('logo-invisible');
    mobileMenuButton.classList.toggle('menu-button-open');
    mobileMenuOptions.classList.remove('visible-mobilemenu');
  });
});
