export default function Home() {
  const d = document,
    $home = d.createElement("section"),
    $title = d.createElement("h1"),
    $subtitle = d.createElement("h2"),
    $text = d.createElement("p");
  $title.textContent = "Software engineer";
  $subtitle.textContent = "front-end developer";
  $text.textContent =
    "Javier Andrés Garzón Patarroyo is a software engineer oriented front-end developer, his focus is JavaScript.";
  $home.appendChild($title);
  $home.appendChild($subtitle);
  $home.appendChild($text);
  return $home;
}
