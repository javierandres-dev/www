/**
 * Main script
 * Here the invocation of the other script is generate
 */
import { App } from "./App.js";
// when the document already loaded
window.onload = () => App();
window.addEventListener("hashchange", App);
