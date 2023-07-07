/*
 * @author Leonard Woo
 */
"use strict";

window.addEventListener("load", (event) => {
  var theme = localStorage.getItem('theme');
  if (theme == null) {
    theme = "light";
  } else {
    theme = Pikajs.getDarkMode()? "dark": "light";
  }
  if (theme == "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  localStorage.setItem('theme', theme);

});
