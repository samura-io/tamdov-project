export default class Hamburger {
    constructor(headerSelector) {
        this._headerSelector = headerSelector;
        this._headerElement = document.querySelector(this._headerSelector);
        this._headerButton = this._headerElement.querySelector('.header__button');
        this._headerNav = this._headerElement.querySelector('.header__nav');
        this._headerShadow = this._headerElement.querySelector('.header__shadow');
        this._headerLinks = this._headerElement.querySelectorAll('.header__link');
        this._body = document.querySelector('.root');
    };

    _toggle() {
        this._body.classList.toggle('scroll-hidden');
        this._headerNav.classList.toggle('header__nav_open');
        this._headerShadow.classList.toggle('header__shadow_active');
        this._headerButton.classList.toggle('header__button_open');
    };

    _close() {
        this._body.classList.remove('scroll-hidden');
        this._headerNav.classList.remove('header__nav_open');
        this._headerShadow.classList.remove('header__shadow_active');
        this._headerButton.classList.remove('header__button_open');
    };

    setEventListeners() {
        this._headerButton.addEventListener('click', ()=>{this._toggle()});
        this._headerShadow.addEventListener('click', ()=>{this._toggle()});
        this._headerLinks.forEach((i)=>{
            i.addEventListener('click', ()=>{this._close()});
        })
    };
};
