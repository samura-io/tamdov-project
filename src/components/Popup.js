import SimpleLightbox from 'simplelightbox';

export default class Popup {
  constructor(popupSelector, templateSelector, elementSelector, popupTitle) {
    this._popupSelector = popupSelector;
    this._templateSelector = templateSelector;
    this._popupTitle = popupTitle;
    this._elementSelector = elementSelector;
    this._popupElement = document.querySelector(this._popupSelector);
    this._title = this._popupElement.querySelector('.popup__title');
    this._popupTitleElement = this._popupElement.querySelector('.title__name');
    this._sliderContainer = this._popupElement.querySelector('.popup-swiper-wrapper');
    this._subtitle = this._popupElement.querySelector('.popup__subtitle');
    this._closeButton = this._popupElement.querySelector('.popup__close');
    this._body = document.querySelector('.root');
    this._gallery = document.querySelector('.gallery');
  }

  _fillContent(data) {
    data.images.forEach((item) => {
      const templateElement = document
        .querySelector(this._templateSelector)
        .content.querySelector(this._elementSelector)
        .cloneNode(true);
      templateElement.querySelector('.popup-swiper-link').href = item;
      templateElement.querySelector('.popup-swiper-img').src = item;
      this._sliderContainer.append(templateElement);
    });
    this._title.textContent = data.title;
    this._popupTitleElement.textContent = this._popupTitle;
    this._popupElement.querySelector('.popup__subtitle').innerHTML = data.subtitle;

    new SimpleLightbox('.popup-swiper-link');
  }

  open(data) {
    this._fillContent(data);
    const scrollbarWidth = window.innerWidth - document.body.offsetWidth;
    this._body.classList.add('scroll-hidden');
    this._body.style.paddingRight = `${scrollbarWidth}px`;
    this._popupElement.classList.add('popup__opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  _close() {
    this._popupElement.classList.remove('popup__opened');
    this._body.classList.remove('scroll-hidden');
    this._body.style.paddingRight = '0';
    setTimeout(() => {
      this._title.textContent = null;
      this._subtitle.textContent = null;
      this._sliderContainer.innerHTML = '';
      document.removeEventListener('keydown', this._handleEscClose);
    }, 500);

  }

  _handleEscClose = (e) => {
    if (e.key === 'Escape') {
      this._close();
    }
  };

  setEventListeners() {
    this._closeButton.addEventListener('click', () => { this._close(); });
    this._popupElement.addEventListener('mousedown', (e) => {
      if (e.currentTarget === e.target) {
        this._close();
      }
    });
  }

  // removeEventListeners() {
  //   this._closeButton.removeEventListener('click', this._close);
  //   this._popupElement.removeEventListener('mousedown', this._overlayClose);
  // }
}
