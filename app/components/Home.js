"use strict";
export default function Home(language) {
  const d = document,
    $home = d.createElement("section"),
    $title = d.createElement("h2"),
    $figure = d.createElement("figure"),
    $figcaption = d.createElement("figcaption"),
    $img = d.createElement("img"),
    $subtitle = d.createElement("h3"),
    $intro = d.createElement("p"),
    $languages = d.createElement("h4"),
    $language = d.createElement("p"),
    $tools = d.createElement("h5"),
    $tool = d.createElement("p");
  $home.classList.add("home");
  $img.setAttribute("src", "./app/images/photo.jpg");
  $img.setAttribute("alt", "software engineer");
  $figcaption.textContent = "Javier Andrés";
  if (language === "es") {
    $title.textContent = "ingeniero de software";
    $subtitle.textContent = "desarrollador front-end";
    $intro.textContent =
      "Hola, Soy Javier Andrés, Soy un ingeniero de software orientado al desarrollo web del lado del cliente, mi especialidad es JavaScript.";
    $languages.textContent = "lenguajes";
    $tools.textContent = "herramientas";
  } else {
    $title.textContent = "software engineer";
    $subtitle.textContent = "front-end developer";
    $intro.textContent =
      "Hello, I'm Javier Andrés, I'm a software engineer oriented front-end developer, my focus is JavaScript.";
    $languages.textContent = "languages";
    $tools.textContent = "tools";
  }
  $language.textContent = "HTML, CSS, JavaScript";
  $tool.textContent = "Git, GitHub, REST API";
  $home.appendChild($title);
  $figure.appendChild($img);
  $figure.appendChild($figcaption);
  $home.appendChild($figure);
  $home.appendChild($subtitle);
  $home.appendChild($intro);
  $home.appendChild($languages);
  $home.appendChild($language);
  $home.appendChild($tools);
  $home.appendChild($tool);
  return $home;
}
