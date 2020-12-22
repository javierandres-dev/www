export default function Contact() {
  const d = document,
    $contact = d.createElement("address"),
    $phone = d.createElement("p"),
    $email = d.createElement("p"),
    $social = d.createElement("p"),
    $github = d.createElement("a");
  $phone.textContent = "📱 +57 300 560 0756";
  $email.textContent = "info 📧 javierandresgp.com";
  $github.setAttribute("target", "_blank");
  $github.setAttribute("rel", "noopener noreferrer");
  $github.setAttribute("href", "https://github.com/javierandresgp/");
  $github.textContent = "GitHub";
  $contact.appendChild($phone);
  $contact.appendChild($email);
  $social.appendChild($github);
  $contact.appendChild($social);
  return $contact;
}
