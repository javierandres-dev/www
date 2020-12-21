export default function Footer() {
  const d = document,
    $footer = d.createElement("footer"),
    $text = d.createElement("p"),
    $copy = d.createElement("small");
  $footer.classList.add("light-mode");
  $footer.setAttribute("data-theme", "");
  $text.textContent = "Found a bug or have an idea? contact me.";
  $copy.textContent =
    "Copyright © 2020 Javier Andrés Garzón Patarroyo. All rights reserved.";
  $footer.appendChild($text);
  $footer.appendChild($copy);
  return $footer;
}
