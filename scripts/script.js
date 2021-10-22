/* auto */
"use strict";
function getHeight(ele){var e=document.querySelector(ele);if(e==null){return 0}var h=e.clientHeight;if(h==null||h<0){h=0}return h};
function calcMain(){let headerHeight=getHeight('header');let footerHeight=getHeight('footer');let main=document.querySelector('main');main.style.setProperty('min-height','calc(100vh - '+(headerHeight+footerHeight)+'px)');main.classList.add('flex')};
window.addEventListener('load',(event) => {calcMain();}, false);
