export function darkMode(check) {
  const $btn = document.getElementById("btnTheme");
  const $selectors = document.querySelectorAll("[data-theme]");
  $selectors.forEach(($selector) => {
    $selector.classList.remove("light-mode");
    $selector.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  });
  $btn.checked = false;
}
export function lightMode(check) {
  const $btn = document.getElementById("btnTheme");
  const $selectors = document.querySelectorAll("[data-theme]");
  $selectors.forEach(($selector) => {
    $selector.classList.remove("dark-mode");
    $selector.classList.add("light-mode");
    localStorage.setItem("theme", "light");
  });
  $btn.checked = true;
}
export function changeTheme() {
  const $btn = document.getElementById("btnTheme");
  if ($btn.checked) {
    lightMode();
  } else {
    darkMode();
  }
}
export function handleTheme() {
  const ls = localStorage;
  document.addEventListener("DOMContentLoaded", (e) => {
    if (ls.getItem("theme") === null) ls.setItem("theme", "light");
    if (ls.getItem("theme") === "light") lightMode();
    if (ls.getItem("theme") === "dark") darkMode();
  });
}
