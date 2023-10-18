import Template from "./Template";

export default class CardTemplate extends Template {
    constructor({handleCardClick}, templateSelector, elementSelector, data, openButtonSelector) {
        super(templateSelector, elementSelector, data);
        this._handleCardClick = handleCardClick;
        this._openButtonSelector = openButtonSelector;
    }

    generateElements(){
        super.generateElements();
        this._element.querySelector('.card__title').textContent = this._data.title;
        this._element.style.backgroundImage = `url(${this._data.mainImage})`;
        this._openButtonElement = this._element.querySelector(this._openButtonSelector);
        this._setEventListeners();
        return this._element;
    }

    _setEventListeners() {
        this._openButtonElement.addEventListener('click', ()=>{
            this._handleCardClick();
        })
    }


}