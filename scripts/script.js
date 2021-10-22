/* auto */
"use strict";
function getHeight(ele){var e=document.querySelector(ele);if(e==null){return 0}var h=e.clientHeight;if(h==null||h<0){h=0}return h};
function calcMain(){let main=document.querySelector('main');main.style.setProperty('min-height','calc(100vh - '+(getHeight('header')+getHeight('footer'))+'px)');main.classList.add('flex')};
window.addEventListener('load',(event) => {calcMain();}, false);
