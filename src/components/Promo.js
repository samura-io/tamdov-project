class Promo {
  constructor() {
    this._banner = document.querySelector('.promo__banner');
    this._contactButton = document.querySelector('.promo__button');
  }

  _scrollToContacts() {
    document.querySelector('.contacts').scrollIntoView({ behavior: 'smooth' });
  }

  setEventListeners() {
    this._contactButton.addEventListener('click', this._scrollToContacts);
  }
}

export default Promo;
