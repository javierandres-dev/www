export default function Header() {
  const d = document,
    $header = d.createElement("header"),
    $home = d.createElement("a"),
    $toggle = d.createElement("div");
  $home.setAttribute("href", "https://www.javierandresgp.com");
  $home.textContent = "Javier Andrés GP";
  $toggle.classList.add("theme");
  $toggle.innerHTML = `
<input type="checkbox" name="theme" class="theme-cb" id="btnTheme">
<label class="theme-label" for="btnTheme">
  <div class="theme-inner"></div>
  <div class="theme-switch"></div>
</label>
  `;
  $header.appendChild($home);
  $header.appendChild($toggle);
  return $header;
}
