import Template from "./Template";

export default class ImageTemplate extends Template {
    constructor(templateSelector, elementSelector, data) {
        super(templateSelector, elementSelector, data);
    }

    generateElements(){
        super.generateElements();
        this._element.src = this._data;

        return this._element;
      }
}