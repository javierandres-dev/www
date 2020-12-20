export default function Nav() {
  const d = document,
    $nav = d.createElement("nav"),
    $portfolio = d.createElement("a"),
    $about = d.createElement("a"),
    $contact = d.createElement("a");
  $portfolio.setAttribute("href", "#/portfolio");
  $about.setAttribute("href", "#/about");
  $contact.setAttribute("href", "#/contact");
  $portfolio.textContent = "Portfolio";
  $about.textContent = "About";
  $contact.textContent = "Contact";
  $nav.appendChild($portfolio);
  $nav.appendChild($about);
  $nav.appendChild($contact);
  return $nav;
}
