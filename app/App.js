"use strict";
import Header from "./components/Header.js";
import BtnMenu from "./components/BtnMenu.js";
import Nav from "./components/Nav.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import Router from "./components/Router.js";
// main component, here the call of the other components is centralized
export function App() {
  const $body = document.querySelector("body");
  $body.classList.add("light-mode");
  $body.setAttribute("data-theme", "");
  $body.innerHTML = null;
  $body.appendChild(Header());
  $body.appendChild(BtnMenu());
  $body.appendChild(Nav());
  $body.appendChild(Main());
  $body.appendChild(Footer());
  Router();
}
