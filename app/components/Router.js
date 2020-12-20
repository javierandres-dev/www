export default function Router() {
  const d = document,
    { hash } = location,
    $main = d.querySelector("main");
  if (hash === "" || hash === "#/") {
    $main.innerHTML = "home";
    console.log("home");
  } else if (hash === "#/portfolio") {
    $main.innerHTML = "portfolio";
    console.log("portfolio");
  } else if (hash === "#/about") {
    $main.innerHTML = "about";
    console.log("about");
  } else if (hash === "#/contact") {
    $main.innerHTML = "contact";
    console.log("contact");
  } else {
    $main.innerHTML = "404";
    console.log("404");
  }
}
