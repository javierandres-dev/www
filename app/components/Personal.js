export default function Personal() {
  const d = document,
    $personal = d.createElement("section"),
    $text = d.createElement("p");
  $text.textContent =
    "Javier Andrés was born in 1976 in the city of Bogotá D.C., Colombia. He is an only child, married to a wonderful woman with whom he also has two wonderful children.";
  $personal.appendChild($text);
  return $personal;
}
