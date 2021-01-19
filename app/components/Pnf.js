"use strict";
export default function Pnf(language) {
  const d = document,
    $error = d.createElement("div"),
    $title = d.createElement("h1"),
    $subtitle = d.createElement("h2"),
    $text = d.createElement("p");
  $title.textContent = "Error";
  $subtitle.textContent = "404";
  if (language === "es") {
    $text.textContent = "Página no encontrada.";
  } else {
    $text.textContent = "Page not found.";
  }
  $error.appendChild($title);
  $error.appendChild($subtitle);
  $error.appendChild($text);
  console.log(language);
  return $error;
}
