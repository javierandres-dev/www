export default function Personal() {
  const d = document,
    $personal = d.createElement("section"),
    $text = d.createElement("p");
  $text.textContent =
    "I was born in 1976 in the city of Bogotá D.C., Colombia. I'm an only child, married to a wonderful woman with whom I also have two awesome children.";
  $personal.appendChild($text);
  return $personal;
}
