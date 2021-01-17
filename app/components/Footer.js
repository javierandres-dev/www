export default function Footer() {
  const d = document,
    $footer = d.createElement("footer"),
    $text = d.createElement("p"),
    $copy = d.createElement("small");
  $footer.classList.add("footer");
  $text.textContent = "Found a bug or have an idea? contact me.";
  $copy.textContent = "Copyright © 2020 Javier Andrés GP. All rights reserved.";
  $footer.appendChild($text);
  $footer.appendChild($copy);
  return $footer;
}
