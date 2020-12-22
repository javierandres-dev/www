export default function Personal() {
  const d = document,
    $personal = d.createElement("section"),
    $title = d.createElement("h1"),
    $subtitle = d.createElement("h2"),
    $p1 = d.createElement("p"),
    $p2 = d.createElement("p");
  $title.textContent = "more ... ";
  $subtitle.textContent = "... about Javier Andrés";
  $p1.textContent =
    "I was born in 1976 in the city of Bogotá D.C., Colombia. I'm an only child, married to a wonderful woman with whom I also have two awesome children.";
  $p2.textContent =
    "My wife is a professional woman, she is a teacher, my oldest son is also a professional, he is a graphic designer with emphasis on animation and my youngest son is in the last year of school.";
  $personal.appendChild($title);
  $personal.appendChild($subtitle);
  $personal.appendChild($p1);
  $personal.appendChild($p2);
  return $personal;
}
