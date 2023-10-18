export default class Template {
  constructor(templateSelector, elementSelector, data) {
    this._data = data;
    this._templateSelector = templateSelector;
    this._elementSelector = elementSelector;
  }

  _getTemplate() {
    const templateElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(this._elementSelector)
      .cloneNode(true);

      return templateElement;
  }

  generateElements(){
    this._element = this._getTemplate();
  }
}
