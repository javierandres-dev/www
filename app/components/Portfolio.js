export default function Portfolio() {
  const d = document,
    $portfolio = d.createElement("section"),
    $title = d.createElement("h1"),
    $subtitle = d.createElement("h2"),
    $text = d.createElement("p"),
    $repo = d.createElement("p"),
    $github = d.createElement("a");
  $github.setAttribute("target", "_blank");
  $github.setAttribute("rel", "noopener noreferrer");
  $github.setAttribute("href", "https://github.com/javierandresgp/");
  $title.textContent = "my portfolio";
  $subtitle.textContent = ". . .";
  $text.textContent = "I am working on it . . .";
  $repo.textContent = "Look my ";
  $github.textContent = "GitHub";
  $portfolio.appendChild($title);
  $portfolio.appendChild($subtitle);
  $portfolio.appendChild($text);
  $repo.appendChild($github);
  $portfolio.appendChild($repo);
  return $portfolio;
}
