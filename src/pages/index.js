import '../styles/style.css';
import { paginationSwiper, changeSwiper, popupSwiper } from '../components/Swipers';
paginationSwiper;
changeSwiper;
popupSwiper;

const hamburgerButton = document.querySelector('.header__button');
const body = document.querySelector('body');
const navSelector = document.querySelector('.header__nav');
const shadow = document.querySelector('.header__shadow');
const links = document.querySelectorAll('.header__link');

const toggleHamburger = () => {
    body.classList.toggle('scroll-hidden')
    navSelector.classList.toggle('header__nav_open');
    shadow.classList.toggle('header__shadow_active');
    hamburgerButton.classList.toggle('header__button_open');
}

hamburgerButton.addEventListener('click', toggleHamburger);
shadow.addEventListener('click', toggleHamburger);
links.forEach((i)=>{i.addEventListener('click', toggleHamburger)})