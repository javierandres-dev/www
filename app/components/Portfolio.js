export default function Portfolio() {
  const d = document,
    $portfolio = d.createElement("section"),
    $title = d.createElement("h1"),
    $subtitle = d.createElement("h2"),
    $text = d.createElement("p");
  $title.textContent = "";
  $subtitle.textContent = "";
  $text.textContent = "Portfolio.";
  $portfolio.appendChild($title);
  $portfolio.appendChild($subtitle);
  $portfolio.appendChild($text);
  return $portfolio;
}
