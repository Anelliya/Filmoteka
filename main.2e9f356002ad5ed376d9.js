(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2mXJ":function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,i){var l,o=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"                    "+e.escapeExpression("function"==typeof(l=null!=(l=o(n,"name")||(null!=t?o(t,"name"):t))?l:e.hooks.helperMissing)?l.call(null!=t?t:e.nullContext||{},{name:"name",hash:{},data:i,loc:{start:{line:29,column:20},end:{line:29,column:28}}}):l)+"&nbsp;&nbsp;\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,i){var l,o=e.lambda,r=e.escapeExpression,c=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'\x3c!-- Шаблон модалки одного фильма --\x3e\r\n\r\n<div class="movie-container">\r\n    <div class="movie-image">\r\n        <img src="https://image.tmdb.org/t/p/w500'+r(o(null!=t?c(t,"poster_path"):t,t))+'" alt="'+r(o(null!=t?c(t,"title"):t,t))+'">\r\n    </div>\r\n    <div class="movie-description">\r\n        <h1 class="movie-description-title">'+r(o(null!=t?c(t,"title"):t,t))+'</h1>\r\n        <div class="movie-description-block">\r\n            <ul class="movie-description-list-left">\r\n                <li class="movie-description-list-left-item">Vote / Votes</li>\r\n                <li class="movie-description-list-left-item">Popularity</li>\r\n                <li class="movie-description-list-left-item">Original title</li>\r\n                <li class="movie-description-list-left-item">Genre</li>\r\n            </ul>\r\n            <ul class="movie-description-list-right">\r\n                <li class="movie-description-list-right-item">\r\n                    <span class="movie-rating filler">'+r(o(null!=t?c(t,"vote_average"):t,t))+'</span> /\r\n                    <span class="movie-vote-count filler">'+r(o(null!=t?c(t,"vote_count"):t,t))+'</span>\r\n                </li>\r\n                <li class="movie-description-list-right-item">\r\n                    '+r(o(null!=t?c(t,"popularity"):t,t))+'\r\n                </li>\r\n                <li class="movie-description-list-right-item">\r\n                    <span class="original-title">'+r(o(null!=t?c(t,"original_title"):t,t))+'</span>\r\n                </li>\r\n                <li class="movie-description-list-right-item">\r\n'+(null!=(l=c(n,"each").call(null!=t?t:e.nullContext||{},null!=t?c(t,"genres"):t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:28,column:20},end:{line:30,column:29}}}))?l:"")+'                </li>\r\n            </ul>\r\n        </div>\r\n        <div class="movie-about">\r\n            <p class="movie-about-title">ABOUT</p>\r\n            <p class="movie-about-text">'+r(o(null!=t?c(t,"overview"):t,t))+'</p>\r\n        </div>\r\n        <button class="add-to-watched" type="button" data-action-watched="watched" data-movie-id="'+r(o(null!=t?c(t,"id"):t,t))+'">ADD TO\r\n            WATCHED</button>\r\n        <button class="add-to-queue" type="button" data-action-queue="queue" data-movie-id="'+r(o(null!=t?c(t,"id"):t,t))+'">ADD TO\r\n            QUEUE</button>\r\n    </div>\r\n</div>'},useData:!0})},"Dv/5":function(e,t,n){},GwTD:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,a,i){return'<div class="btn-wrapper">\r\n  <button id="watched-film-btn" data-watched-film-btn="watch-btn" class="btn btn-active-style" disabled>Watched</button>\r\n  <button id="watched-queue-btn" data-queue-film-btn="queue-btn" class="btn btn-nonactive-style">queue</button>\r\n</div>'},useData:!0})},QfWi:function(e,t,n){"use strict";n.r(t);n("w1z4"),n("Dv/5"),n("lYjL"),n("RtS0"),n("IvQZ"),n("8cZI"),n("lmye"),n("WB5j"),n("Xlt+"),n("D/wG"),n("fp7Y"),n("JBxO"),n("FdtR"),n("Muwe"),n("4NM0"),n("aZFp"),n("3dw1");var a,i=function(e){var t;return function(){return t||(t=document.querySelector(e)),t}},l=((a={body:document.querySelector("body"),upBtn:document.querySelector(".up-btn-wrapper"),gallery:document.querySelector("#gallery"),form:document.querySelector(".search-form"),modalDiv:document.querySelector(".js-lightbox"),lightbox:document.querySelector(".lightbox"),overlayDiv:document.querySelector(".lightbox__overlay"),modalDivContent:document.querySelector(".lightbox__content"),libraryButton:document.querySelector(".library-ref"),container:document.getElementById(".container"),header:document.querySelector("#page-header"),galleryList:document.querySelector(".gallery"),watchedBtn:document.querySelector("#watched-film-btn"),homeBtn:document.querySelector(".home-ref"),pagination:document.querySelector(".pagination"),btnPage1:document.querySelector(".btn-page1"),btnPage2:document.querySelector(".btn-page2"),btnPage3:document.querySelector(".btn-page3"),btnPage4:document.querySelector(".btn-page4"),btnPage5:document.querySelector(".btn-page5"),previousTen:document.querySelector(".previous-ten"),nextTen:document.querySelector(".next-ten"),isActive:document.querySelectorAll(".btn-js"),queueBtn:i("#watched-queue-btn")}).watchedBtn=i("#watched-film-btn"),a),o=n("v+qO"),r=n.n(o);var c=function(e){var t="";"404"!==e.status&&(t=r()(e)),l.gallery.insertAdjacentHTML("beforeend",t)},s="api_key=50b81e1c6c3b9e5f74d2015b742ff0b0",u=1;function d(){var e=event.target;document.querySelectorAll(".btn").forEach((function(e){return e.classList.remove("active")})),e.classList.contains("btn")&&e.classList.add("active");var t=event.target.dataset.index;console.log("activeBtn",t),u=Number(t)}function m(){return fetch("https://api.themoviedb.org/3/trending/movie/week?"+s+"&page="+u).then((function(e){return e.json()})).then((function(e){var t=e.results;fetch("https://api.themoviedb.org/3/genre/movie/list?"+s).then((function(e){return e.json()})).then((function(e){var n=e.genres;!function(e,t){e.map((function(e){var n=e.id,a=e.poster_path,i=e.title,l=e.release_date,o=e.genre_ids,r=t.filter((function(e){return o.includes(e.id)})).map((function(e){return e.name}));r.length>3&&r.splice(3,0,"Other");var s=r.slice(0,4).join(", "),u=l.split("-")[0];c([{id:n,poster_path:a,title:i,movieGenres:s,releaseDate:u}])}))}(t,n)}))}))}l.pagination.addEventListener("click",(function(e){d(),u>2&&(l.btnPage1.dataset.index=""+(u-2),l.btnPage1.textContent=""+(u-2),l.btnPage2.dataset.index=""+(u-1),l.btnPage2.textContent=""+(u-1),l.btnPage3.dataset.index=""+u,l.btnPage3.textContent=""+u,l.btnPage4.dataset.index=""+(u+1),l.btnPage4.textContent=""+(u+1),l.btnPage5.dataset.index=""+(u+2),l.btnPage5.textContent=""+(u+2));u<999&&(l.nextTen.dataset.index=""+(u+1),l.nextTen.dataset.index=""+(u+1));u>1&&(l.previousTen.dataset.index=""+(u-1),l.previousTen.dataset.index=""+(u-1));l.gallery.innerHTML="",m()}));var p=m;var v=function(e){return fetch("https://api.themoviedb.org/3/movie/"+e+"?api_key=50b81e1c6c3b9e5f74d2015b742ff0b0").then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},h=n("2mXJ"),f=n.n(h);var g=function(e){var t="";"404"!==e.status&&(e.popularity=Math.round(e.popularity),t=f()(e)),l.modalDivContent.insertAdjacentHTML("beforeend",t)};function y(){window.removeEventListener("keydown",b),l.modalDiv.classList.remove("is-open"),l.body.classList.remove("scroll-hidden"),l.upBtn.hidden=!1}function b(e){"Escape"===e.code&&y()}l.gallery.addEventListener("click",(function(e){if("IMG"!==e.target.nodeName)return;if(e.target.dataset.emptyPage)return;var t=e.target;t.dataset.src;!function(e){window.addEventListener("keydown",b),l.modalDiv.classList.add("is-open"),l.body.classList.add("scroll-hidden"),l.upBtn.hidden=!0,l.modalDivContent.innerHTML="",v(e).then((function(e){return g(e)}))}(t.dataset.movieId)})),l.overlayDiv.addEventListener("click",y);n("/YXa"),n("WoWj"),n("U00V"),n("wcNg");var w=n("SJqc"),L=n.n(w);function q(e,t,n,a,i,l,o){try{var r=e[l](o),c=r.value}catch(e){return void n(e)}r.done?t(c):Promise.resolve(c).then(a,i)}function x(e){return function(){var t=this,n=arguments;return new Promise((function(a,i){var l=e.apply(t,n);function o(e){q(l,a,i,o,r,"next",e)}function r(e){q(l,a,i,o,r,"throw",e)}o(void 0)}))}}function k(e){var t="";"404"!==e.status&&(t=L()(e)),l.gallery.insertAdjacentHTML("beforeend",t)}function B(){return(B=x(regeneratorRuntime.mark((function e(t){var n,a,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem(t)){e.next=10;break}return l.galleryList.classList.remove("empty-page-style"),l.galleryList.classList.add("gallery"),n=localStorage.getItem(t),a=n.split(","),e.next=7,Promise.all(a.map(function(){var e=x(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/"+t+"?api_key=50b81e1c6c3b9e5f74d2015b742ff0b0&");case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 7:i=e.sent,console.log(i),i.map((function(e){var t=e.id,n=e.name,a=e.poster_path,i=e.title,l=e.release_date,o=e.genres,r=e.vote_average,c=l.split("-")[0],s=o.map((function(e){return e.name})).join(", ");console.log(o),k([{id:t,name:n,poster_path:a,title:i,releaseDate:c,movieGenres:s,vote_average:r}])}));case 10:l.galleryList.hasChildNodes()||(l.galleryList.classList.add("empty-page-style"),l.galleryList.classList.remove("gallery"),l.gallery.innerHTML='<li><h2>EMPTY<h2><p>Nothing has been added yet :(</p><img class="image" data-empty-page="empty-page" src="https://i0.wp.com/www.ecommerce-nation.com/wp-content/uploads/2017/08/How-to-Give-Your-E-Commerce-No-Results-Page-the-Power-to-Sell.png?fit=1000%2C600&ssl=1" alt="empty page pic"></li>');case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=function(e){return B.apply(this,arguments)};function E(){window.location.hash="#queue",l.gallery.innerHTML="",S("queue"),P(l.queueBtn()),P(l.watchedBtn()),l.queueBtn().setAttribute("disabled",!0),l.watchedBtn().removeAttribute("disabled")}function P(e){["btn-nonactive-style","btn-active-style"].map((function(t){return e.classList.toggle(t)}))}l.homeBtn.addEventListener("click",(function(){l.libraryButton.classList.contains("activ-link-style")&&(l.homeBtn.classList.add("activ-link-style"),l.libraryButton.classList.remove("activ-link-style"))}));n("bzha");var D=n("QJ3N");n("zrP5");var T=function(e){D.notice({text:"The movie has been added to the "+e+" list",icon:!0,styling:"custom",delay:700,overlayClosesPinned:!0})};var _=function(e,t,n){var a=[],i=localStorage.getItem(""+t);i&&(a=i.split(",")),a.includes(e)||(a.push(e),T(""+n)),localStorage.setItem(""+t,a)};var j=function(){l.lightbox.addEventListener("click",(function(e){if(event.target.dataset.actionWatched){var t=event.target.dataset.movieId;_(t,"watched",'"WATCHED"')}if(event.target.dataset.actionQueue){var n=event.target.dataset.movieId;_(n,"queue",'"QUEUE"')}}))},M=(n("y89P"),n("GwTD")),A=n.n(M);var C,O=function(){l.homeBtn.classList.contains("activ-link-style")&&(l.homeBtn.classList.remove("activ-link-style"),l.libraryButton.classList.add("activ-link-style")),"#library"===window.location.hash&&(l.pagination.setAttribute("hidden","true"),S("watched")),"#queue"===window.location.hash&&(l.pagination.setAttribute("hidden","true"),E())},H=document.querySelector("#page-header"),G=document.querySelector(".library-ref"),I=document.querySelector(".search-form"),W=document.querySelector(".ref-wrapper"),J=document.querySelector(".remove");C=A()();var N=function(){I.remove(),W.insertAdjacentHTML("afterend",C),H.classList.replace("page-header","page-header-library")};G.addEventListener("click",N),J.addEventListener("click",(function(){J.removeEventListener("click",N)}));var Q=function(){location.hash&&(N(),J.removeEventListener("click",N),O())};var R=function(){location.hash||p(),Q()};n("X5mX");var U=function(e){return fetch("https://api.themoviedb.org/3/search/movie?api_key=50b81e1c6c3b9e5f74d2015b742ff0b0&language=en-US&page=1&include_adult=false&query="+e).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))};var X=function(){l.form.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements.search.value;console.log(t),l.gallery.innerHTML="",U(t).then((function(e){var t=e.results;0!==t.length?c(t):D.error({text:"There was found nothing for your query",icon:!0,styling:"custom",delay:2e3,overlayClosesPinned:!0})}))}))};R(),X(),l.libraryButton.addEventListener("click",(function(){l.pagination.setAttribute("hidden","true"),l.gallery.innerHTML="",S("watched"),l.homeBtn.classList.contains("activ-link-style")&&(l.homeBtn.classList.remove("activ-link-style"),l.libraryButton.classList.add("activ-link-style")),l.queueBtn().classList.contains("btn-active-style")&&(console.log("hello"),P(l.queueBtn()),P(l.watchedBtn()),l.queueBtn().toggleAttribute("disabled"),l.watchedBtn().toggleAttribute("disabled"))})),l.header.addEventListener("click",(function(){event.target.dataset.queueFilmBtn&&E(),event.target.dataset.watchedFilmBtn&&(window.location.hash="#library",l.gallery.innerHTML="",S("watched"),P(l.watchedBtn()),P(l.queueBtn()),l.queueBtn().removeAttribute("disabled"),l.watchedBtn().setAttribute("disabled",!0))})),j();var Y,z=n("yWWw"),F=n.n(z),V=document.querySelector("[data-up-btn]");window.addEventListener("scroll",F()((Y=V,function(e){pageYOffset<document.documentElement.clientHeight?Y.classList.add("visually-hidden"):Y.classList.remove("visually-hidden")}),250)),V.addEventListener("click",(function(e){window.scrollTo({top:0,behavior:"smooth"})}))},SJqc:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,i){var l,o,r=null!=t?t:e.nullContext||{},c=e.hooks.helperMissing,s=e.escapeExpression,u=e.lambda,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="movie-card">\r\n    <img class="movie-poster" src="https://image.tmdb.org/t/p/w500'+s("function"==typeof(o=null!=(o=d(n,"poster_path")||(null!=t?d(t,"poster_path"):t))?o:c)?o.call(r,{name:"poster_path",hash:{},data:i,loc:{start:{line:3,column:66},end:{line:3,column:81}}}):o)+'" alt="'+s("function"==typeof(o=null!=(o=d(n,"title")||(null!=t?d(t,"title"):t))?o:c)?o.call(r,{name:"title",hash:{},data:i,loc:{start:{line:3,column:88},end:{line:3,column:97}}}):o)+'"\r\n        data-movie-id="'+s("function"==typeof(o=null!=(o=d(n,"id")||(null!=t?d(t,"id"):t))?o:c)?o.call(r,{name:"id",hash:{},data:i,loc:{start:{line:4,column:23},end:{line:4,column:29}}}):o)+'">\r\n    <h1 class="movie-title">'+s(u(null!=t?d(t,"title"):t,t))+'</h1>\r\n    <p class="movie-info"> '+s(u(null!=(l=null!=t?d(t,"id"):t)?d(l,"name"):l,t))+'</p>\r\n    <div class="info-wrapper">\r\n        <p class="movie-info">\r\n            '+s(u(null!=t?d(t,"movieGenres"):t,t))+" | "+s(u(null!=t?d(t,"releaseDate"):t,t))+'\r\n        </p>\r\n        <p class="vote">'+s(u(null!=t?d(t,"vote_average"):t,t))+"</p>\r\n    </div>\r\n</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,i){var l;return null!=(l=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:1,column:0},end:{line:14,column:9}}}))?l:""},useData:!0})},"v+qO":function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,i){var l,o=null!=t?t:e.nullContext||{},r=e.hooks.helperMissing,c="function",s=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="movie-card">\r\n    <img class="movie-poster" src="https://image.tmdb.org/t/p/w500'+s(typeof(l=null!=(l=u(n,"poster_path")||(null!=t?u(t,"poster_path"):t))?l:r)===c?l.call(o,{name:"poster_path",hash:{},data:i,loc:{start:{line:5,column:66},end:{line:5,column:81}}}):l)+'" alt="'+s(typeof(l=null!=(l=u(n,"title")||(null!=t?u(t,"title"):t))?l:r)===c?l.call(o,{name:"title",hash:{},data:i,loc:{start:{line:5,column:88},end:{line:5,column:97}}}):l)+'"\r\n        data-movie-id="'+s(typeof(l=null!=(l=u(n,"id")||(null!=t?u(t,"id"):t))?l:r)===c?l.call(o,{name:"id",hash:{},data:i,loc:{start:{line:6,column:23},end:{line:6,column:29}}}):l)+'">\r\n    <h1 class="movie-title">'+s(typeof(l=null!=(l=u(n,"title")||(null!=t?u(t,"title"):t))?l:r)===c?l.call(o,{name:"title",hash:{},data:i,loc:{start:{line:7,column:28},end:{line:7,column:37}}}):l)+'</h1>\r\n    <p class="movie-info"> '+s(typeof(l=null!=(l=u(n,"movieGenres")||(null!=t?u(t,"movieGenres"):t))?l:r)===c?l.call(o,{name:"movieGenres",hash:{},data:i,loc:{start:{line:8,column:27},end:{line:8,column:42}}}):l)+" | "+s(typeof(l=null!=(l=u(n,"releaseDate")||(null!=t?u(t,"releaseDate"):t))?l:r)===c?l.call(o,{name:"releaseDate",hash:{},data:i,loc:{start:{line:8,column:45},end:{line:8,column:60}}}):l)+"</p>\r\n</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,i){var l;return"\x3c!-- Шаблон карточки фильмов --\x3e\r\n\r\n"+(null!=(l=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:3,column:0},end:{line:10,column:9}}}))?l:"")},useData:!0})},w1z4:function(e,t){!function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector(".team-modal-close-button"),modal:document.querySelector(".backdrop")};function t(){e.modal.classList.add("is-hidden"),window.removeEventListener("keydown",n),e.closeModalBtn.removeEventListener("click",t),e.modal.removeEventListener("click",t)}function n(e){"Escape"===e.code&&t()}e.openModalBtn.addEventListener("click",(function(){e.modal.classList.remove("is-hidden"),window.addEventListener("keydown",n),e.closeModalBtn.addEventListener("click",t),e.modal.addEventListener("click",t)}))}()}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.2e9f356002ad5ed376d9.js.map