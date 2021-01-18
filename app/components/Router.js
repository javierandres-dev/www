"use strict";
import Home from "./Home.js";
import Portfolio from "./Portfolio.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Personal from "./Personal.js";
import Pnf from "./Pnf.js";
import Aside from "./Aside.js";
export default function Router() {
  const { hash } = location,
    $main = document.querySelector("main");
  if (hash === "" || hash === "#/") {
    $main.appendChild(Home());
  } else if (hash === "#/portfolio") {
    $main.appendChild(Portfolio());
    $main.insertAdjacentElement("afterend", Aside());
  } else if (hash === "#/about") {
    $main.appendChild(About());
  } else if (hash === "#/contact") {
    $main.appendChild(Contact());
  } else if (hash === "#/personal") {
    $main.appendChild(Personal());
  } else {
    $main.appendChild(Pnf());
  }
}
