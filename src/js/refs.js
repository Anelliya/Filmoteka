const searchBySelector = querySelector => {
  let el;
  return () => {
    if (!el) {
      el = document.querySelector(querySelector);
    }
    return el;
  };
};

const refs = {
  gallery: document.querySelector('#gallery'),
  form: document.querySelector('.search-form'),
  modalDiv: document.querySelector('.js-lightbox'),
  overlayDiv: document.querySelector('.lightbox__overlay'),
  modalDivContent: document.querySelector('.lightbox__content'),
  openImg: document.querySelector('.lightbox__image'),
  libraryButton: document.querySelector('.library-ref'),
  container: document.getElementById('.container'),
  lightbox: document.querySelector('.lightbox'),
  header: document.querySelector('#page-header'),
  galleryList: document.querySelector('.gallery'),
  watchedBtn: document.querySelector('#watched-film-btn'),
  homeBtn: document.querySelector('.home-ref'),

  pagination: document.querySelector('.pagination'),
  btnPage1: document.querySelector('.btn-page1'),
  btnPage2: document.querySelector('.btn-page2'),
  btnPage3: document.querySelector('.btn-page3'),
  btnPage4: document.querySelector('.btn-page4'),
  btnPage5: document.querySelector('.btn-page5'),
  previous: document.querySelector('.previous'),
  next: document.querySelector('.next'),

  queueBtn: searchBySelector('#watched-queue-btn'),
  watchedBtn: searchBySelector('#watched-film-btn'),
};

export default refs;
