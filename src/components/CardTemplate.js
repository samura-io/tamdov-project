import Template from './Template';

export default class CardTemplate extends Template {
  constructor({ handleCardClick }, templateSelector, elementSelector, data) {
    super(templateSelector, elementSelector, data);
    this._handleCardClick = handleCardClick;
  }

  generateElements() {
    super.generateElements();
    this._element.querySelector('.card__title').textContent = this._data.title;
    this._element.style.backgroundImage = `url(${this._data.mainImage})`;
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._element.addEventListener('click', ()=>{
      this._handleCardClick();
    });
  }

}
