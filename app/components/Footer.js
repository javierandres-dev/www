"use strict";
export default function Footer() {
  const spanish = navigator.language.startsWith("es"),
    d = document,
    $footer = d.createElement("footer"),
    $text = d.createElement("p"),
    $copy = d.createElement("small");
  $footer.classList.add("footer");
  if (spanish) {
    $text.textContent = "Encontró un error o tiene una idea? contácteme.";
    $copy.textContent =
      "Copyright © 2020 Javier Andrés GP. Todos los derechos reservados.";
  } else {
    $text.textContent = "Found a bug or have an idea? contact me.";
    $copy.textContent =
      "Copyright © 2020 Javier Andrés GP. All rights reserved.";
  }
  $footer.appendChild($text);
  $footer.appendChild($copy);
  return $footer;
}
