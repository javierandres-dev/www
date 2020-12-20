export default function Pnf() {
  const d = document,
    $error = d.createElement("div"),
    $title = d.createElement("h1"),
    $subtitle = d.createElement("h2"),
    $text = d.createElement("p");
  $title.textContent = "";
  $subtitle.textContent = "";
  $text.textContent = "Page not found.";
  $error.appendChild($title);
  $error.appendChild($subtitle);
  $error.appendChild($text);
  return $error;
}
