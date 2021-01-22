"use strict";
const d = document;
// set styles for dark mode and saved in local storage
export function darkMode() {
  const $btn = d.getElementById("btnTheme");
  const $selectors = d.querySelectorAll("[data-theme]");
  $selectors.forEach(($selector) => {
    $selector.classList.remove("light-mode");
    $selector.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  });
  $btn.checked = false;
}
// set styles for light mode and saved in local storage
export function lightMode() {
  const $btn = d.getElementById("btnTheme");
  const $selectors = d.querySelectorAll("[data-theme]");
  $selectors.forEach(($selector) => {
    $selector.classList.remove("dark-mode");
    $selector.classList.add("light-mode");
    localStorage.setItem("theme", "light");
  });
  $btn.checked = true;
}
// change mode according to user selection
export function changeTheme() {
  const $btn = d.getElementById("btnTheme");
  if ($btn.checked) {
    lightMode();
  } else {
    darkMode();
  }
}
// save in local storage the user preference
export function setTheme() {
  const ls = localStorage;
  d.addEventListener("DOMContentLoaded", (e) => {
    if (ls.getItem("theme") === null) ls.setItem("theme", "light");
    if (ls.getItem("theme") === "light") lightMode();
    if (ls.getItem("theme") === "dark") darkMode();
  });
}
