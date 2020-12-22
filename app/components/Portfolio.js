export default function Portfolio() {
  const d = document,
    $portfolio = d.createElement("section"),
    $title = d.createElement("h1"),
    $subtitle = d.createElement("h2"),
    $text = d.createElement("p");
  $title.textContent = "my portfolio";
  $subtitle.textContent = ". . .";
  $text.textContent = "I am working on it . . .";
  $portfolio.appendChild($title);
  $portfolio.appendChild($subtitle);
  $portfolio.appendChild($text);
  return $portfolio;
}
