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
  $p1.textContent = "I'm an autodidact programmer.";
  $p2.textContent =
    "In 1994 I obtained my first formal job in the company 'Team Computer', there I learned to assemble computers and install software.";
  $p3.textContent =
    "In 2002 I decided to work independently marketing software and hardware and giving technical support to my clients, I did so until 2019.";
  $p4.textContent =
    "In September 2019, I decided to quit my job to focus on achieving two of my big dreams, learning to Code and learning English.";
  $p5.textContent =
    "In 2019 I joined to the school of computer science and software development 'Holberton School' to the foundation program and I currently dedicate all my time to  study the specialization in Full-Stack Web Development and to train myself as a software engineer to obtain my first formal job as programmer.";
  $a.setAttribute("href", "#/personal");
  $a.textContent = "My personal life ... ";
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
