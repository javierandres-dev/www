"use strict";
/**
 * Main script
 * Here the invocation of the other script is generate
 */
import { App } from "./App.js";
import { setTheme, changeTheme } from "./helpers/handleTheme.js";
import handleMenu from "./helpers/handleMenu.js";
// when all scripts and styles already loaded
//window.onload = () => {};
window.addEventListener("hashchange", App);
// when the document tree already loaded
document.addEventListener("DOMContentLoaded", () => {
  App();
  eventListeners();
});
const eventListeners = () => {
  document.addEventListener("click", (e) => {
    if (e.target.id === "btnTheme") {
      changeTheme();
    }
    if (e.target.id === "btnMenu") {
      handleMenu();
    }
  });
};
setTheme();
