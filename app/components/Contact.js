export default function Contact() {
  const d = document,
    $contact = d.createElement("address"),
    $phone = d.createElement("p"),
    $email = d.createElement("p");
  $phone.textContent = "📱 +57 300 560 0756";
  $email.textContent = "info 📧 javierandresgp.com";
  $contact.appendChild($phone);
  $contact.appendChild($email);
  return $contact;
}
