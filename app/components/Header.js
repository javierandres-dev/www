export default function Header() {
  const d = document,
    $header = d.createElement("header"),
    $home = d.createElement("a"),
    $toggle = d.createElement("div");
  $home.setAttribute("href", "#/");
  $home.textContent = "javierandresgp.com";
  $toggle.classList.add("theme");
  $toggle.innerHTML = `
<input type="checkbox" name="theme" class="theme-cb" id="theme-0" checked>
<label class="theme-label" for="theme-0">
  <div class="theme-inner"></div>
  <div class="theme-switch"></div>
</label>
  `;
  $header.appendChild($home);
  $header.appendChild($toggle);
  return $header;
}
