export default function handleTheme() {
  const $selectors = document.querySelectorAll("[data-theme]"),
    $btn = document.getElementById("btnTheme");
  if ($btn.checked) {
    $selectors.forEach(($selector) => {
      $selector.classList.remove("dark-mode");
      $selector.classList.add("light-mode");
    });
  } else {
    $selectors.forEach(($selector) => {
      $selector.classList.remove("light-mode");
      $selector.classList.add("dark-mode");
    });
  }
}
