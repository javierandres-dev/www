export default function Main() {
  const $main = document.createElement("main");
  $main.classList.add("light-mode");
  $main.setAttribute("role", "main");
  $main.setAttribute("data-theme", "");
  return $main;
}
