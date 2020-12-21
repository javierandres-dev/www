export default function Home() {
  const d = document,
    $home = d.createElement("section"),
    $title = d.createElement("h1"),
    $figure = d.createElement("figure"),
    $figcaption = d.createElement("figcaption"),
    $img = d.createElement("img"),
    $subtitle = d.createElement("h2"),
    $intro = d.createElement("p"),
    $languages = d.createElement("h3"),
    $language = d.createElement("p"),
    $tools = d.createElement("h4"),
    $tool = d.createElement("p");
  $home.classList.add("home");
  $title.textContent = "Software Engineer";
  $img.setAttribute("src", "./app/images/photo.jpg");
  $img.setAttribute("alt", "software engineer");
  $language.classList.add("t-center");
  $tool.classList.add("t-center");
  $figcaption.textContent = "Javier Andrés Garzón Patarroyo";
  $subtitle.textContent = "Front-End Developer";
  $intro.textContent =
    "Javier Andrés is a software engineer oriented front-end developer, his focus is JavaScript.";
  $languages.textContent = "Languages";
  $language.textContent = "HTML, CSS, JavaScript";
  $tools.textContent = "Tools";
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
