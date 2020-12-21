export default function About() {
  const d = document,
    $about = d.createElement("section"),
    $title = d.createElement("h1"),
    $subtitle = d.createElement("h2"),
    $p1 = d.createElement("p"),
    $p2 = d.createElement("p"),
    $p3 = d.createElement("p"),
    $p4 = d.createElement("p"),
    $p5 = d.createElement("p"),
    $a = d.createElement("a");
  $title.textContent = "";
  $subtitle.textContent = "";
  $p1.textContent = "Javier Andrés is a autodidact programmer.";
  $p2.textContent =
    "In 1994 he obtained his first formal job in the company 'Team Computer', there he learned to assemble computers and install software.";
  $p3.textContent =
    "In 2002 he decided to work independently marketing software and hardware and giving technical support to his clients, he did so until 2019.";
  $p4.textContent =
    "In September 2019, he decided to quit his job to focus on achieving two of his big dreams, learning to code and learning English.";
  $p5.textContent =
    "He currently dedicates all his time to training himself as a software engineer to obtain his first formal job like programmer.";
  $a.setAttribute("href", "#/personal");
  $a.textContent = "His personal life ... ";
  $about.appendChild($title);
  $about.appendChild($subtitle);
  $about.appendChild($p1);
  $about.appendChild($p2);
  $about.appendChild($p3);
  $about.appendChild($p4);
  $about.appendChild($p5);
  $about.appendChild($a);
  return $about;
}
