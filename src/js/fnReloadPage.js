import refs from './refs.js';
import getMoviesFromLocalStorage from './fnGetDataFromLocStorage.js';
import * as library from './myLibrary.js';



function fnReloadPage() {
  //refs.gallery.innerHTML = '';
  //getMoviesFromLocalStorage('watched');
  if (refs.homeBtn.classList.contains('activ-link-style')) {
    refs.homeBtn.classList.remove('activ-link-style');
    refs.libraryButton.classList.add('activ-link-style');
  }
  if (window.location.hash === '#library') {
    getMoviesFromLocalStorage('watched');
  }
  if (window.location.hash === '#queue') {
    library.queueSetStyles()
  }

}

export default fnReloadPage;