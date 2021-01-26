"use strict";
// set up the view of the "portfolio" page
export default function Portfolio() {
  const spanish = navigator.language.startsWith("es"),
    d = document,
    $portfolio = d.createElement("section"),
    $title = d.createElement("h2"),
    $subtitle = d.createElement("h3"),
    $a1 = d.createElement("a"),
    $s1 = d.createElement("strong"),
    $sp1 = d.createElement("span"),
    $p1 = d.createElement("p"),
    $a2 = d.createElement("a"),
    $s2 = d.createElement("strong"),
    $sp2 = d.createElement("span"),
    $p2 = d.createElement("p"),
    $a3 = d.createElement("a"),
    $s3 = d.createElement("strong"),
    $sp3 = d.createElement("span"),
    $p3 = d.createElement("p"),
    $a4 = d.createElement("a"),
    $s4 = d.createElement("strong"),
    $sp4 = d.createElement("span"),
    $p4 = d.createElement("p"),
    $a5 = d.createElement("a"),
    $s5 = d.createElement("strong"),
    $sp5 = d.createElement("span"),
    $p5 = d.createElement("p"),
    $a6 = d.createElement("a"),
    $s6 = d.createElement("strong"),
    $sp6 = d.createElement("span"),
    $p6 = d.createElement("p"),
    $a = d.createElement("a"),
    $p = d.createElement("p");
  $a1.setAttribute("target", "_blank");
  $a1.setAttribute("rel", "noopener noreferrer");
  $a1.setAttribute(
    "href",
    "https://javierandresgp.github.io/github_pages-jsonplaceholder/"
  );
  $a1.textContent = "JSONplaceholder ";
  $s1.appendChild($a1);
  $p1.appendChild($s1);
  $a2.setAttribute("target", "_blank");
  $a2.setAttribute("rel", "noopener noreferrer");
  $a2.setAttribute(
    "href",
    "https://javierandresgp.github.io/github_pages-pokemon_cards/"
  );
  $a2.textContent = "Pokémon Cards ";
  $s2.appendChild($a2);
  $p2.appendChild($s2);
  $a3.setAttribute("target", "_blank");
  $a3.setAttribute("rel", "noopener noreferrer");
  $a3.setAttribute(
    "href",
    "https://javierandresgp.github.io/github_pages-weather_search/"
  );
  $a3.textContent = "Weather Search ";
  $s3.appendChild($a3);
  $p3.appendChild($s3);
  $a4.setAttribute("target", "_blank");
  $a4.setAttribute("rel", "noopener noreferrer");
  $a4.setAttribute(
    "href",
    "https://javierandresgp.github.io/github_pages-foreign_exchange/"
  );
  $a4.textContent = "Foreign Exchange ";
  $s4.appendChild($a4);
  $p4.appendChild($s4);
  $a5.setAttribute("target", "_blank");
  $a5.setAttribute("rel", "noopener noreferrer");
  $a5.setAttribute(
    "href",
    "https://javierandresgp.github.io/github_pages-javascript_exercises/"
  );
  $a5.textContent = "JavaScript Exercises ";
  $s5.appendChild($a5);
  $p5.appendChild($s5);
  $a6.setAttribute("target", "_blank");
  $a6.setAttribute("rel", "noopener noreferrer");
  $a6.setAttribute(
    "href",
    "https://javierandresgp.github.io/github_pages-calcular_prestamo/"
  );
  $a6.textContent = "Calcular Préstamo ";
  $s6.appendChild($a6);
  $p6.appendChild($s6);
  if (spanish) {
    $title.textContent = "portafolio";
    $subtitle.textContent = "proyectos";
    $sp1.textContent =
      " Es una demostración de todos los datos disponibles en la mas popular API de pruebas.";
    $sp2.textContent =
      " Mire todos los Pokémon y sus principales características.";
    $sp3.textContent = " Encuentre el clima actual de cualquier ciudad.";
    $sp4.textContent =
      " Obtenga la actual Tasa Representativa del Mercado y su historico, publique sus propios precios de compra y venta de moneda.";
    $sp5.textContent =
      " Sitio web inspirado y basado en los ejercicios propuestos en w3resource.";
    $sp6.textContent =
      " Herramienta útil para calcular las cuotas de un préstamo con tasa fija mensual.";
    $p.textContent = "Para más proyectos mire mi repositorio en ";
  } else {
    $title.textContent = "portfolio";
    $subtitle.textContent = "projects";
    $sp1.textContent =
      " It's a demo consuming all available data in the most popular testing API.";
    $sp2.textContent =
      " Look at all the pokemon and their main characteristics.";
    $sp3.textContent = " Find out the current weather of any city.";
    $sp4.textContent =
      " Get the daily TCRMH and its historic data and post your own prices to buy and sell of currency.";
    $sp5.textContent =
      " Website is inspired and based on the exercises proposed in w3resource.";
    $sp6.textContent =
      " Useful tool to calculate the installments of a loan with a monthly fixed rate.";
    $p.textContent = "For more projects look my repositories in ";
  }
  $p1.appendChild($sp1);
  $p2.appendChild($sp2);
  $p3.appendChild($sp3);
  $p4.appendChild($sp4);
  $p5.appendChild($sp5);
  $p6.appendChild($sp6);
  $a.setAttribute("target", "_blank");
  $a.setAttribute("rel", "noopener noreferrer");
  $a.setAttribute("href", "https://github.com/javierandresgp/");
  $a.textContent = " GitHub";
  $p.appendChild($a);
  $portfolio.appendChild($title);
  $portfolio.appendChild($subtitle);
  $portfolio.appendChild($p1);
  $portfolio.appendChild($p2);
  $portfolio.appendChild($p3);
  $portfolio.appendChild($p4);
  $portfolio.appendChild($p5);
  $portfolio.appendChild($p6);
  $portfolio.appendChild($p);
  return $portfolio;
}
