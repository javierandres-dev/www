export default function Header() {
  const d = document,
    $header = d.createElement("header"),
    $heading = d.createElement("h1"),
    $home = d.createElement("a"),
    $toggle = d.createElement("div");
  $header.classList.add("header");
  $home.setAttribute("href", "https://www.javierandresgp.com");
  $home.textContent = "Javier Andrés GP";
  $toggle.classList.add("btn-theme");
  $toggle.innerHTML = `
<input type="checkbox" class="btn-theme__cb" id="btnTheme">
<label class="btn-theme__label" for="btnTheme">
  <div class="btn-theme__inner"></div>
  <div class="btn-theme__switch"></div>
</label>
  `;
  $heading.appendChild($home);
  $header.appendChild($heading);
  $header.appendChild($toggle);
  return $header;
}
/* name="theme" */
