export default function Footer() {
  const d = document,
    $footer = d.createElement("footer"),
    $text = d.createElement("small");
  $text.textContent =
    "Copyright © 2020 Javier Andrés Garzón Patarroyo. All rights reserved.";
  $footer.appendChild($text);
  return $footer;
}
