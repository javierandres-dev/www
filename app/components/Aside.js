export default function Aside() {
  const d = document,
    $aside = d.createElement("aside"),
    $gsuite = d.createElement("a"),
    $hostgator = d.createElement("a");
  $gsuite.setAttribute("target", "_blank");
  $hostgator.setAttribute("target", "_blank");
  $gsuite.setAttribute("rel", "noopener noreferrer");
  $hostgator.setAttribute("rel", "noopener noreferrer");
  $gsuite.setAttribute("href", "https://goo.gl/TXalp7");
  $hostgator.setAttribute(
    "href",
    "https://www.hostgator.la/2425-14-1-1464.html"
  );
  $gsuite.textContent = "G Suite";
  $hostgator.textContent = "HostGator";
  $aside.appendChild($gsuite);
  $aside.appendChild($hostgator);
  return $aside;
}
