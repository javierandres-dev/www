export default function Header() {
  const d = document,
    $header = d.createElement("header"),
    $home = d.createElement("a");
  $home.setAttribute("href", "#/");
  $home.textContent = "javierandresgp.com";
  $header.appendChild($home);
  return $header;
}
