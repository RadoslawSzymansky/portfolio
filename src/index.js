import "./sass/style.scss";

const btnBurger = document.querySelector('.menu__burger');

btnBurger.addEventListener('click', () => {
  document.querySelector('.menu__list').classList.toggle('menu__list--open');
  btnBurger.classList.toggle('menu__burger--close');
});