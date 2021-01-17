export default function Portfolio() {
  const d = document,
    $portfolio = d.createElement("section"),
    $title = d.createElement("h1"),
    $subtitle = d.createElement("h2"),
    $text = d.createElement("p"),
    $ul = d.createElement("ul"),
    $l1 = d.createElement("li"),
    $l2 = d.createElement("li"),
    $l3 = d.createElement("li"),
    $l4 = d.createElement("li"),
    $l5 = d.createElement("li"),
    $a1 = d.createElement("a"),
    $a2 = d.createElement("a"),
    $a3 = d.createElement("a"),
    $a4 = d.createElement("a"),
    $a5 = d.createElement("a"),
    $github = d.createElement("a");
  $title.textContent = "my portfolio";
  $subtitle.textContent = "Projects";
  $a1.setAttribute("target", "_blank");
  $a1.setAttribute("rel", "noopener noreferrer");
  $a1.setAttribute(
    "href",
    "https://javierandresgp.github.io/github_pages-jsonplaceholder/"
  );
  $a1.textContent = "JSONplaceholder";
  $l1.appendChild($a1);
  $ul.appendChild($l1);
  $a2.setAttribute("target", "_blank");
  $a2.setAttribute("rel", "noopener noreferrer");
  $a2.setAttribute(
    "href",
    "https://javierandresgp.github.io/github_pages-pokemon_cards/"
  );
  $a2.textContent = "Pokémon Cards";
  $l2.appendChild($a2);
  $ul.appendChild($l2);
  $a3.setAttribute("target", "_blank");
  $a3.setAttribute("rel", "noopener noreferrer");
  $a3.setAttribute(
    "href",
    "https://javierandresgp.github.io/github_pages-weather_search/"
  );
  $a3.textContent = "Weather Search";
  $l3.appendChild($a3);
  $ul.appendChild($l3);
  $a4.setAttribute("target", "_blank");
  $a4.setAttribute("rel", "noopener noreferrer");
  $a4.setAttribute(
    "href",
    "https://javierandresgp.github.io/github_pages-javascript_exercises/"
  );
  $a4.textContent = "JavaScript Exercises";
  $l4.appendChild($a4);
  $ul.appendChild($l4);
  $a5.setAttribute("target", "_blank");
  $a5.setAttribute("rel", "noopener noreferrer");
  $a5.setAttribute(
    "href",
    "https://javierandresgp.github.io/github_pages-foreign_exchange/"
  );
  $a5.textContent = "Foreign Exchange";
  $l5.appendChild($a5);
  $ul.appendChild($l5);
  $text.textContent = "For more projects look my repositories in ";
  $github.setAttribute("target", "_blank");
  $github.setAttribute("rel", "noopener noreferrer");
  $github.setAttribute("href", "https://github.com/javierandresgp/");
  $github.textContent = " GitHub";
  $text.appendChild($github);
  $portfolio.appendChild($title);
  $portfolio.appendChild($subtitle);
  $portfolio.appendChild($ul);
  $portfolio.appendChild($text);
  return $portfolio;
}
