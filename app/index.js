/**
 * Main script
 * Here the invocation of the other script is generate
 */
import { App } from "./App.js";
import handleTheme from "./helpers/handleTheme.js";
// when the document already loaded
window.onload = () => App();
window.addEventListener("hashchange", App);
document.addEventListener("DOMContentLoaded", () => {
  eventListeners();
});
const eventListeners = () => {
  document.addEventListener("click", (e) => {
    if (e.target.id === "btnTheme") {
      handleTheme();
    }
  });
};
