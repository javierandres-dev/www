"use strict";
import Home from "./Home.js";
import Portfolio from "./Portfolio.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Personal from "./Personal.js";
import Pnf from "./Pnf.js";
import Aside from "./Aside.js";
export default function Router(language) {
  const { hash } = location,
    $main = document.querySelector("main");
  if (hash === "" || hash === "#/") {
    $main.innerHTML = null;
    $main.appendChild(Home(language));
  } else if (hash === "#/portfolio") {
    $main.innerHTML = null;
    $main.appendChild(Portfolio(language));
    $main.insertAdjacentElement("afterend", Aside());
  } else if (hash === "#/about") {
    $main.innerHTML = null;
    $main.appendChild(About(language));
  } else if (hash === "#/contact") {
    $main.innerHTML = null;
    $main.appendChild(Contact());
  } else if (hash === "#/personal") {
    $main.innerHTML = null;
    $main.appendChild(Personal(language));
  } else {
    $main.innerHTML = null;
    $main.appendChild(Pnf(language));
  }
}
