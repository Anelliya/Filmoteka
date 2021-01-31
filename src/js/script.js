import * as templ from './modalCards';
import createLibraryPage from './myLibrary.js';
import addDataToLocalStorage from './localStorage.js';
import refs from './refs.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import renderingContent from './renderingContent.js';

renderingContent();
createLibraryPage();
addDataToLocalStorage();
