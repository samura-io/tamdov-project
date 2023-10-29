import '../styles/style.css';
import Swipers from '../components/Swipers';
import Hamburger from '../components/Hamburger';
import Popup from '../components/Popup';
import ImageTemplate from '../components/ImageTemplate';
import CardTemplate from '../components/CardTemplate';
import Section from '../components/Section';
import contentLink from '../content.json';

fetch(contentLink)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        promoSection.renderItems(data.promoImages.urls);
        cardSection.renderItems(data.cards);
        partnersSection.renderItems(data.partners.logos)
        swipers.runPaginationSwiper();
        swipers.runChangeSwiper();
    });

const swipers = new Swipers();

function addImageElement(item, templateId, placeSelector){
        const imageTemplate = new ImageTemplate(templateId, placeSelector, item);
        const templateElement = imageTemplate.generateElements();
        return templateElement;
}

function addCardElement(item){
        const cardTemplate = new CardTemplate({handleCardClick: ()=>{
            swipers.runPopupSwiper();
            cardPopup.open(item);
        }}, '#card__template', '.card', item);
        const templateElement = cardTemplate.generateElements();
        return templateElement;
}

const promoSection = new Section({renderer: (item)=>{
    const element = addImageElement(item, '#promo__template', '.pagination-swiper-slide');
    promoSection.addItem(element);
}}, '.pagination-swiper-wrapper');

const cardSection = new Section({renderer: (item)=>{
    const element = addCardElement(item);
    cardSection.addItem(element);
}}, '.cards__container');

const partnersSection = new Section({renderer: (item)=>{
    const element = addImageElement(item, '#partners__template', '.change-swiper-slide');
    partnersSection.addItem(element);
}},'.change-swiper-wrapper');

const cardPopup = new Popup('.popup', '#popup__template', '.popup-swiper-slide');
cardPopup.setEventListeners();

const hamburger = new Hamburger('.header');
hamburger.setEventListeners();
