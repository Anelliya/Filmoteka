(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2mXJ":function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,i){var o,r=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"                    "+e.escapeExpression("function"==typeof(o=null!=(o=r(n,"name")||(null!=t?r(t,"name"):t))?o:e.hooks.helperMissing)?o.call(null!=t?t:e.nullContext||{},{name:"name",hash:{},data:i,loc:{start:{line:29,column:20},end:{line:29,column:28}}}):o)+"&nbsp;&nbsp;\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,i){var o,r=e.lambda,l=e.escapeExpression,s=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'\x3c!-- Шаблон модалки одного фильма --\x3e\r\n\r\n<div class="movie-container">\r\n    <div class="movie-image">\r\n        <img src="https://image.tmdb.org/t/p/w500'+l(r(null!=t?s(t,"poster_path"):t,t))+'" alt="'+l(r(null!=t?s(t,"title"):t,t))+'">\r\n    </div>\r\n    <div class="movie-description">\r\n        <h1 class="movie-description-title">'+l(r(null!=t?s(t,"title"):t,t))+'</h1>\r\n        <div class="movie-description-block">\r\n            <ul class="movie-description-list-left">\r\n                <li class="movie-description-list-left-item">Vote / Votes</li>\r\n                <li class="movie-description-list-left-item">Popularity</li>\r\n                <li class="movie-description-list-left-item">Original title</li>\r\n                <li class="movie-description-list-left-item">Genre</li>\r\n            </ul>\r\n            <ul class="movie-description-list-right">\r\n                <li class="movie-description-list-right-item">\r\n                    <span class="movie-rating filler">'+l(r(null!=t?s(t,"vote_average"):t,t))+'</span> /\r\n                    <span class="movie-vote-count filler">'+l(r(null!=t?s(t,"vote_count"):t,t))+'</span>\r\n                </li>\r\n                <li class="movie-description-list-right-item">\r\n                    '+l(r(null!=t?s(t,"popularity"):t,t))+'\r\n                </li>\r\n                <li class="movie-description-list-right-item">\r\n                    <span class="original-title">'+l(r(null!=t?s(t,"original_title"):t,t))+'</span>\r\n                </li>\r\n                <li class="movie-description-list-right-item">\r\n'+(null!=(o=s(n,"each").call(null!=t?t:e.nullContext||{},null!=t?s(t,"genres"):t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:28,column:20},end:{line:30,column:29}}}))?o:"")+'                </li>\r\n            </ul>\r\n        </div>\r\n        <div class="movie-about">\r\n            <p class="movie-about-title">ABOUT</p>\r\n            <p class="movie-about-text">'+l(r(null!=t?s(t,"overview"):t,t))+'</p>\r\n        </div>\r\n        <button class="add-to-watched active-btn-style" type="button" data-action-watched="watched"\r\n            data-movie-id="'+l(r(null!=t?s(t,"id"):t,t))+'">ADD TO\r\n            WATCHED</button>\r\n        <button class="add-to-queue active-btn-style" type="button" data-action-queue="queue"\r\n            data-movie-id="'+l(r(null!=t?s(t,"id"):t,t))+'">ADD TO\r\n            QUEUE</button>\r\n    </div>\r\n</div>'},useData:!0})},"Dv/5":function(e,t,n){},GwTD:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,a,i){return'<div class="btn-wrapper">\r\n  <button id="watched-film-btn" data-watched-film-btn="watch-btn" class="btn btn-active-style" disabled>Watched</button>\r\n  <button id="watched-queue-btn" data-queue-film-btn="queue-btn" class="btn btn-nonactive-style">queue</button>\r\n</div>'},useData:!0})},QfWi:function(e,t,n){"use strict";n.r(t);n("w1z4"),n("Dv/5"),n("lYjL"),n("RtS0"),n("IvQZ"),n("8cZI"),n("lmye"),n("WB5j"),n("Xlt+"),n("D/wG"),n("fp7Y"),n("JBxO"),n("FdtR"),n("QDHd"),n("Muwe"),n("4NM0"),n("aZFp"),n("3dw1");var a,i=function(e){var t;return function(n){return void 0===n&&(n=!1),t&&!n||(t=document.querySelector(e)),t}},o=((a={body:document.querySelector("body"),upBtn:document.querySelector(".up-btn-wrapper"),gallery:document.querySelector("#gallery"),form:document.querySelector(".search-form"),modalDiv:document.querySelector(".js-lightbox"),lightbox:document.querySelector(".lightbox"),overlayDiv:document.querySelector(".lightbox__overlay"),modalDivContent:document.querySelector(".lightbox__content"),libraryButton:document.querySelector(".library-ref"),container:document.getElementById(".container"),header:document.querySelector("#page-header"),galleryList:document.querySelector(".gallery"),watchedBtn:document.querySelector("#watched-film-btn"),homeBtn:document.querySelector(".home-ref"),pagination:document.querySelector(".pagination"),btnPage1:document.querySelector(".btn-page1"),btnPage2:document.querySelector(".btn-page2"),btnPage3:document.querySelector(".btn-page3"),btnPage4:document.querySelector(".btn-page4"),btnPage5:document.querySelector(".btn-page5"),previous:document.querySelector(".previous"),next:document.querySelector(".next"),queueBtn:i("#watched-queue-btn")}).watchedBtn=i("#watched-film-btn"),a.delMovieBtn=document.querySelectorAll("#delMovieBtn"),a.addToWatched=i(".add-to-watched"),a.addToQueue=i(".add-to-queue"),a),r=n("v+qO"),l=n.n(r);var s=function(e){var t="";"404"!==e.status&&(t=l()(e)),o.gallery.insertAdjacentHTML("beforeend",t)},c=n("ZEAl"),u={lines:15,length:0,width:10,radius:31,scale:1.25,corners:1,speed:1.4,rotate:0,animation:"spinner-line-fade-default",direction:1,color:"#FF6B08",fadeColor:"transparent",top:"46%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"},d="api_key=50b81e1c6c3b9e5f74d2015b742ff0b0",m=1,v=document.querySelectorAll(".btn");function p(){var e=event.target;v.forEach((function(e){return e.classList.remove("active")})),e.classList.contains("btn")&&e.classList.add("active")}function h(){var e="https://api.themoviedb.org/3/trending/movie/week?"+d+"&page="+m,t=document.getElementById("gallery"),n=new c.a(u).spin(t);return fetch(e).then((function(e){return e.json()})).then((function(e){var t=e.results;f().then((function(e){var n=e.genres;b(t,n)})).finally((function(){n.stop()}))}))}function f(){return fetch("https://api.themoviedb.org/3/genre/movie/list?"+d).then((function(e){return e.json()}))}function b(e,t){e.map((function(e){var n=e.id,a=e.poster_path,i=e.title,o=e.release_date,r=e.genre_ids,l=t.filter((function(e){return r.includes(e.id)})).map((function(e){return e.name}));l.length>3&&l.splice(3,0,"Other");var c=l.slice(0,4).join(", "),u=o.split("-")[0];s([{id:n,poster_path:a,title:i,movieGenres:c,releaseDate:u}])}))}o.pagination.addEventListener("click",(function(e){if("BUTTON"===e.target.tagName){var t=e.target.dataset.index;console.log("activeBtn",t),m=Number(t);var n=o.btnPage1,a=o.btnPage2,i=o.btnPage3,r=o.btnPage4,l=o.btnPage5,s=o.previous,c=o.next;e.target.classList.contains("next")&&m<999&&(v.forEach((function(e){return e.classList.remove("active")})),n.classList.add("active"),c.dataset.index=Number(c.dataset.index)+5,n.textContent=Number(n.textContent)+5,a.textContent=Number(a.textContent)+5,i.textContent=Number(i.textContent)+5,r.textContent=Number(r.textContent)+5,l.textContent=Number(l.textContent)+5,n.dataset.index=Number(n.dataset.index)+5,a.dataset.index=Number(a.dataset.index)+5,i.dataset.index=Number(i.dataset.index)+5,r.dataset.index=Number(r.dataset.index)+5,l.dataset.index=Number(l.dataset.index)+5,m=c.dataset.index),s.dataset.index=m,e.target.classList.contains("previous")&&m>5&&(c.dataset.index=Number(c.dataset.index)-5,s.dataset.index=c.dataset.index,n.textContent=Number(n.textContent)-5,a.textContent=Number(a.textContent)-5,i.textContent=Number(i.textContent)-5,r.textContent=Number(r.textContent)-5,l.textContent=Number(l.textContent)-5,n.dataset.index=Number(n.dataset.index)-5,a.dataset.index=Number(a.dataset.index)-5,i.dataset.index=Number(i.dataset.index)-5,r.dataset.index=Number(r.dataset.index)-5,l.dataset.index=Number(l.dataset.index)-5,m=s.dataset.index),console.log("currentPage>",m),e.target.classList.contains("btn")&&p(),o.gallery.innerHTML="",h()}}));var g=h;var y=function(e){var t="https://api.themoviedb.org/3/movie/"+e+"?api_key=50b81e1c6c3b9e5f74d2015b742ff0b0",n=document.querySelector(".lightbox__content"),a=new c.a(u).spin(n);return fetch(t).then((function(e){return e.json()})).catch((function(e){return console.log(e)})).finally((function(){a.stop()}))},w=n("2mXJ"),x=n.n(w);var L=function(e){var t="";"404"!==e.status&&(e.popularity=Math.round(e.popularity),t=x()(e)),o.modalDivContent.insertAdjacentHTML("beforeend",t)};function q(e){if(localStorage.getItem("watched")||localStorage.getItem("queue")){console.log("we are in!");var t=localStorage.getItem("watched"),n=localStorage.getItem("queue"),a=o.addToWatched(!0),i=o.addToQueue(!0);t.includes(e)&&a.classList.contains("active-btn-style")&&(a.classList.remove("active-btn-style"),a.classList.add("inactive-btn-style"),a.textContent="ALREADY IN WATCHED",a.setAttribute("disabled","true")),n.includes(e)&&i.classList.contains("active-btn-style")&&(i.classList.remove("active-btn-style"),i.classList.add("inactive-btn-style"),i.textContent="ALREADY IN QUEUE",i.setAttribute("disabled","true"))}}function E(){window.removeEventListener("keydown",k),o.modalDiv.classList.remove("is-open"),o.body.classList.remove("scroll-hidden"),o.upBtn.hidden=!1}function k(e){"Escape"===e.code&&E()}o.gallery.addEventListener("click",(function(e){e.target===document.querySelectorAll(".movie-poster-lib")&&console.log(e.target);if("IMG"!==e.target.nodeName)return;if(e.target.dataset.emptyPage)return;var t=e.target;t.dataset.src;!function(e){window.addEventListener("keydown",k),o.modalDiv.classList.add("is-open"),o.body.classList.add("scroll-hidden"),o.upBtn.hidden=!0,o.modalDivContent.innerHTML="",y(e).then((function(e){return L(e)})).then((function(){return q(e)}))}(t.dataset.movieId)})),o.gallery.addEventListener("click",(function(e){q(e.movieId)})),o.overlayDiv.addEventListener("click",E);n("/YXa"),n("WoWj"),n("U00V"),n("wcNg");var B=function(){console.log(o.galleryList.hasChildNodes()),o.galleryList.hasChildNodes()||(o.gallery.innerHTML="",o.galleryList.classList.add("empty-page-style"),o.galleryList.classList.remove("gallery"),o.gallery.innerHTML='<li><h2>EMPTY<h2><p>Nothing has been added yet :(</p><img class="image" data-empty-page="empty-page" src="https://i0.wp.com/www.ecommerce-nation.com/wp-content/uploads/2017/08/How-to-Give-Your-E-Commerce-No-Results-Page-the-Power-to-Sell.png?fit=1000%2C600&ssl=1" alt="empty page pic"></li>')},S=n("SJqc"),C=n.n(S);n("uQK7");var N=function(e,t){var n=localStorage.getItem(e);if(n.includes(t)){var a=n.split(","),i=a.indexOf(t),r=a.splice(i,1);r=a.join(),localStorage.setItem(e,r),o.gallery.innerHTML="",_(e)}};var D=function(e){"#library"===window.location.hash&&N("watched",e.id),"#queue"===window.location.hash&&N("queue",e.id)};function A(e,t,n,a,i,o,r){try{var l=e[o](r),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(a,i)}function T(e){return function(){var t=this,n=arguments;return new Promise((function(a,i){var o=e.apply(t,n);function r(e){A(o,a,i,r,l,"next",e)}function l(e){A(o,a,i,r,l,"throw",e)}r(void 0)}))}}function P(e){var t="";"404"!==e.status&&(t=C()(e)),o.gallery.insertAdjacentHTML("beforeend",t)}function M(){return(M=T(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem(t)){e.next=9;break}return o.galleryList.classList.remove("empty-page-style"),o.galleryList.classList.add("gallery"),n=localStorage.getItem(t),a=n.split(","),e.next=7,Promise.all(a.map(function(){var e=T(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/"+t+"?api_key=50b81e1c6c3b9e5f74d2015b742ff0b0&");case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 7:e.sent.map((function(e){var t=e.id,n=e.name,a=e.poster_path,i=e.title,o=e.release_date,r=e.genres,l=e.vote_average;P([{id:t,name:n,poster_path:a,title:i,releaseDate:o.split("-")[0],movieGenres:r.map((function(e){return e.name})).join(", "),vote_average:l}])}));case 9:B(),o.gallery.addEventListener("click",(function(){if(event.target.classList.contains("delMovieBtn")){var e=event.target;D(e)}}));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _=function(e){return M.apply(this,arguments)};function j(){window.location.hash="#queue",o.gallery.innerHTML="",_("queue"),I(o.queueBtn()),I(o.watchedBtn()),o.queueBtn().setAttribute("disabled",!0),o.watchedBtn().removeAttribute("disabled")}function I(e){["btn-nonactive-style","btn-active-style"].map((function(t){return e.classList.toggle(t)}))}o.homeBtn.addEventListener("click",(function(){o.libraryButton.classList.contains("activ-link-style")&&(o.homeBtn.classList.add("activ-link-style"),o.libraryButton.classList.remove("activ-link-style"))}));n("bzha");var O=n("QJ3N");n("zrP5");var H=function(e){O.notice({text:"The movie has been added to the "+e+" list",icon:!0,styling:"custom",delay:700,overlayClosesPinned:!0})};var W=function(e,t,n){var a=[],i=localStorage.getItem(""+t);i&&(a=i.split(",")),a.includes(e)||(a.push(e),H(""+n)),localStorage.setItem(""+t,a)};var Q=function(){o.lightbox.addEventListener("click",(function(e){if(event.target.dataset.actionWatched){var t=event.target.dataset.movieId,n=o.addToWatched(!0);W(t,"watched",'"WATCHED"'),n.classList.contains("active-btn-style")&&(n.classList.remove("active-btn-style"),n.classList.add("inactive-btn-style"),n.textContent="ALREADY IN WATCHED",n.setAttribute("disabled","true"))}if(event.target.dataset.actionQueue){var a=event.target.dataset.movieId,i=o.addToQueue(!0);W(a,"queue",'"QUEUE"'),i.classList.contains("active-btn-style")&&(console.log("queue"),i.classList.remove("active-btn-style"),i.classList.add("inactive-btn-style"),i.textContent="ALREADY IN QUEUE",i.setAttribute("disabled","true"))}}))},G=(n("y89P"),n("GwTD")),U=n.n(G);var R,Y=function(){o.homeBtn.classList.contains("activ-link-style")&&(o.homeBtn.classList.remove("activ-link-style"),o.libraryButton.classList.add("activ-link-style")),"#library"===window.location.hash&&(o.pagination.setAttribute("hidden","true"),o.gallery.innerHTML="",_("watched")),"#queue"===window.location.hash&&(o.pagination.setAttribute("hidden","true"),j())},J=document.querySelector("#page-header"),F=document.querySelector(".library-ref"),X=document.querySelector(".search-form"),z=document.querySelector(".ref-wrapper"),Z=document.querySelector(".remove");R=U()();var V=function(){X.remove(),z.insertAdjacentHTML("afterend",R),J.classList.replace("page-header","page-header-library")};F.addEventListener("click",V),Z.addEventListener("click",(function(){Z.removeEventListener("click",V)}));var K=function(){location.hash&&(V(),Z.removeEventListener("click",V),Y())};var $=function(){location.hash||g(),K()};n("X5mX");var ee=function(e){return fetch("https://api.themoviedb.org/3/search/movie?api_key=50b81e1c6c3b9e5f74d2015b742ff0b0&language=en-US&page=1&include_adult=false&query="+e).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))};var te=function(){o.form.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements.search.value;console.log(t),o.gallery.innerHTML="",ee(t).then((function(e){var t=e.results;0!==t.length?f().then((function(e){var n=e.genres;b(t,n)})):O.error({text:"There was found nothing for your query",icon:!0,styling:"custom",delay:2e3,overlayClosesPinned:!0})}))}))};$(),te(),o.libraryButton.addEventListener("click",(function(){o.pagination.setAttribute("hidden","true"),o.gallery.innerHTML="",_("watched"),o.homeBtn.classList.contains("activ-link-style")&&(o.homeBtn.classList.remove("activ-link-style"),o.libraryButton.classList.add("activ-link-style")),o.queueBtn().classList.contains("btn-active-style")&&(console.log("hello"),I(o.queueBtn()),I(o.watchedBtn()),o.queueBtn().toggleAttribute("disabled"),o.watchedBtn().toggleAttribute("disabled"))})),o.header.addEventListener("click",(function(){event.target.dataset.queueFilmBtn&&j(),event.target.dataset.watchedFilmBtn&&(window.location.hash="#library",o.gallery.innerHTML="",_("watched"),I(o.watchedBtn()),I(o.queueBtn()),o.queueBtn().removeAttribute("disabled"),o.watchedBtn().setAttribute("disabled",!0))})),Q();var ne,ae=n("yWWw"),ie=n.n(ae),oe=document.querySelector("[data-up-btn]");window.addEventListener("scroll",ie()((ne=oe,function(e){pageYOffset<document.documentElement.clientHeight?ne.classList.add("visually-hidden"):ne.classList.remove("visually-hidden")}),250)),oe.addEventListener("click",(function(e){window.scrollTo({top:0,behavior:"smooth"})}))},SJqc:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,i){var o,r=null!=t?t:e.nullContext||{},l=e.hooks.helperMissing,s=e.escapeExpression,c=e.lambda,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="movie-card">\r\n    <div class="movie-wrapper">\r\n        <img class="movie-poster-lib" src="https://image.tmdb.org/t/p/w500'+s("function"==typeof(o=null!=(o=u(n,"poster_path")||(null!=t?u(t,"poster_path"):t))?o:l)?o.call(r,{name:"poster_path",hash:{},data:i,loc:{start:{line:4,column:74},end:{line:4,column:89}}}):o)+'" alt="'+s("function"==typeof(o=null!=(o=u(n,"title")||(null!=t?u(t,"title"):t))?o:l)?o.call(r,{name:"title",hash:{},data:i,loc:{start:{line:4,column:96},end:{line:4,column:105}}}):o)+'"\r\n            data-movie-id="'+s("function"==typeof(o=null!=(o=u(n,"id")||(null!=t?u(t,"id"):t))?o:l)?o.call(r,{name:"id",hash:{},data:i,loc:{start:{line:5,column:27},end:{line:5,column:33}}}):o)+'">\r\n        <button class="delMovieBtn" id='+s(c(null!=t?u(t,"id"):t,t))+'>x</button>\r\n    </div>\r\n\r\n    <div class="movie-title-wrapper">\r\n        <h1 class="movie-title">'+s(c(null!=t?u(t,"title"):t,t))+'</h1>\r\n\r\n    </div>\r\n    <div class="info-wrapper">\r\n        <p class="movie-info">\r\n            '+s(c(null!=t?u(t,"movieGenres"):t,t))+" | "+s(c(null!=t?u(t,"releaseDate"):t,t))+'\r\n        </p>\r\n        <p class="vote">'+s(c(null!=t?u(t,"vote_average"):t,t))+"</p>\r\n\r\n    </div>\r\n\r\n</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,i){var o;return null!=(o=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:1,column:0},end:{line:22,column:9}}}))?o:""},useData:!0})},"v+qO":function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,i){var o,r=null!=t?t:e.nullContext||{},l=e.hooks.helperMissing,s="function",c=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="movie-card">\r\n    <img class="movie-poster" src="https://image.tmdb.org/t/p/w500'+c(typeof(o=null!=(o=u(n,"poster_path")||(null!=t?u(t,"poster_path"):t))?o:l)===s?o.call(r,{name:"poster_path",hash:{},data:i,loc:{start:{line:5,column:66},end:{line:5,column:81}}}):o)+'" alt="'+c(typeof(o=null!=(o=u(n,"title")||(null!=t?u(t,"title"):t))?o:l)===s?o.call(r,{name:"title",hash:{},data:i,loc:{start:{line:5,column:88},end:{line:5,column:97}}}):o)+'"\r\n        data-movie-id="'+c(typeof(o=null!=(o=u(n,"id")||(null!=t?u(t,"id"):t))?o:l)===s?o.call(r,{name:"id",hash:{},data:i,loc:{start:{line:6,column:23},end:{line:6,column:29}}}):o)+'">\r\n    <h1 class="movie-title">'+c(typeof(o=null!=(o=u(n,"title")||(null!=t?u(t,"title"):t))?o:l)===s?o.call(r,{name:"title",hash:{},data:i,loc:{start:{line:7,column:28},end:{line:7,column:37}}}):o)+'</h1>\r\n    <p class="movie-info"> '+c(typeof(o=null!=(o=u(n,"movieGenres")||(null!=t?u(t,"movieGenres"):t))?o:l)===s?o.call(r,{name:"movieGenres",hash:{},data:i,loc:{start:{line:8,column:27},end:{line:8,column:42}}}):o)+" | "+c(typeof(o=null!=(o=u(n,"releaseDate")||(null!=t?u(t,"releaseDate"):t))?o:l)===s?o.call(r,{name:"releaseDate",hash:{},data:i,loc:{start:{line:8,column:45},end:{line:8,column:60}}}):o)+"</p>\r\n</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,i){var o;return"\x3c!-- Шаблон карточки фильмов --\x3e\r\n\r\n"+(null!=(o=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:3,column:0},end:{line:10,column:9}}}))?o:"")},useData:!0})},w1z4:function(e,t){!function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector(".team-modal-close-button"),modal:document.querySelector(".backdrop")};function t(){e.modal.classList.add("is-hidden"),window.removeEventListener("keydown",n),e.closeModalBtn.removeEventListener("click",t),e.modal.removeEventListener("click",t)}function n(e){"Escape"===e.code&&t()}e.openModalBtn.addEventListener("click",(function(){e.modal.classList.remove("is-hidden"),window.addEventListener("keydown",n),e.closeModalBtn.addEventListener("click",t),e.modal.addEventListener("click",t)}))}()}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.7632d18e6cabaf6c8f5e.js.map