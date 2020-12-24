export default function BtnMenu() {
  const d = document,
    $btnMenu = d.createElement("button"),
    $btn = d.createElement("input"),
    $lines = d.createElement("label"),
    $l1 = d.createElement("span"),
    $l2 = d.createElement("span"),
    $l3 = d.createElement("span");
  $btnMenu.classList.add("btn-menu");
  $btn.setAttribute("id", "btnMenu");
  $btn.setAttribute("name", "menu-open");
  $btn.setAttribute("type", "checkbox");
  $btn.setAttribute("href", "#");
  $btn.classList.add("menu-open");
  $lines.setAttribute("for", "btnMenu");
  $lines.classList.add("menu-open-btn");
  $l1.classList.add("menu-line", "menu-line-1");
  $l2.classList.add("menu-line", "menu-line-2");
  $l3.classList.add("menu-line", "menu-line-3");
  $lines.appendChild($l1);
  $lines.appendChild($l2);
  $lines.appendChild($l3);
  $btnMenu.appendChild($btn);
  $btnMenu.appendChild($lines);
  return $btnMenu;
}
