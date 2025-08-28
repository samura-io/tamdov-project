/* eslint-disable no-use-before-define */
import '../scss/main.scss';
import swipers from '../components/Swipers';
import Hamburger from '../components/Hamburger';
import Popup from '../components/Popup';
import ImageTemplate from '../components/ImageTemplate';
import CardTemplate from '../components/CardTemplate';
import Section from '../components/Section';
import contentLink from '../content';
import Promo from '../components/Promo';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Services from '../components/Services';

const aboutButton = document.querySelector('.about__link');
const headerLink = document.querySelectorAll('.header__link');
export let content;

fetch(contentLink)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    promoSection.renderItems(data.promoImages.urls);
    cardSection.renderItems(data.cards);
    partnersSection.renderItems(data.partners.logos);
    swipers.runPaginationSwiper();
    swipers.runChangeSwiper();

    content = data;
  });

function addImageElement(item, templateId, placeSelector) {
  const imageTemplate = new ImageTemplate(templateId, placeSelector, item);
  const templateElement = imageTemplate.generateElements();
  return templateElement;
}

function addCardElement(item) {
  const cardTemplate = new CardTemplate({
    handleCardClick: () => {
      swipers.runPopupSwiper();
      cardPopup.open(item);
    },
  }, '#card__template', '.card', item);
  const templateElement = cardTemplate.generateElements();
  return templateElement;
}

const promoSection = new Section({
  renderer: (item) => {
    const element = addImageElement(item, '#promo__template', '.pagination-swiper-slide');
    promoSection.addItem(element);
  },
}, '.pagination-swiper-wrapper');

const cardSection = new Section({
  renderer: (item) => {
    const element = addCardElement(item);
    cardSection.addItem(element);
  },
}, '.cards__container');

const partnersSection = new Section({
  renderer: (item) => {
    const element = addImageElement(item, '#partners__template', '.change-swiper-slide');
    partnersSection.addItem(element);
  },
}, '.change-swiper-wrapper');

const promo = new Promo();
promo.setEventListeners();

const cardPopup = new Popup('.popup', '#popup__template', '.popup-swiper-slide', 'Проект');
cardPopup.setEventListeners();

const aboutPopup = new Popup('.popup', '#popup__template', '.popup-swiper-slide', 'О компании');
aboutPopup.setEventListeners();

// const services = new Services();
// services.setEventListeners();

const hamburger = new Hamburger('.header');
hamburger.setEventListeners();

aboutButton.addEventListener('click', () => {
  swipers.runPopupSwiper();
  aboutPopup.open(content.about);
});

headerLink.forEach((i) => {
  i.addEventListener('click', (e) => {
    if (i.classList.contains('header__link_type_tel')) return;
    e.preventDefault();
    document.querySelector(i.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});
