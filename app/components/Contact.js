export default function Contact() {
  const d = document,
    $contact = d.createElement("section"),
    $title = d.createElement("h1"),
    $subtitle = d.createElement("h2"),
    $text = d.createElement("p");
  $title.textContent = "";
  $subtitle.textContent = "";
  $text.textContent = "Contact.";
  $contact.appendChild($title);
  $contact.appendChild($subtitle);
  $contact.appendChild($text);
  return $contact;
}
