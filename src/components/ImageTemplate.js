import Template from "./Template";

export default class ImageTemplate extends Template {
    constructor(templateSelector, elementSelector, data) {
        super(templateSelector, elementSelector, data);
    }

    generateElements(){
        super.generateElements();
        if (this._element.children.length === 0) {
            this._element.src = this._data;
        } else {
            this._element.querySelector('.swiper-img').src = this._data;
        }
        return this._element;
      }
}