'use strict';
// set up the view of the "home" page
export default function Home() {
  const spanish = navigator.language.startsWith('es'),
    d = document,
    $home = d.createElement('section'),
    $title = d.createElement('h2'),
    $figure = d.createElement('figure'),
    $figcaption = d.createElement('figcaption'),
    $img = d.createElement('img'),
    $subtitle = d.createElement('h3'),
    $intro = d.createElement('p');
  $home.classList.add('home');
  $img.setAttribute('src', './app/images/photo.jpg');
  $img.setAttribute('alt', 'software engineer');
  $figcaption.textContent = 'Javier Andrés';
  if (spanish) {
    $title.textContent = 'ingeniero de software';
    $subtitle.textContent = 'desarrollador front-end';
    $intro.textContent =
      'Hola, Soy Javier Andrés, Soy un ingeniero de software orientado al desarrollo web del lado del cliente, mi especialidad es JavaScript.';
  } else {
    $title.textContent = 'software engineer';
    $subtitle.textContent = 'front-end developer';
    $intro.textContent =
      "Hello, I'm Javier Andrés, I'm a software engineer oriented front-end developer, my focus is JavaScript.";
  }
  $home.appendChild($title);
  $figure.appendChild($img);
  $figure.appendChild($figcaption);
  $home.appendChild($figure);
  $home.appendChild($subtitle);
  $home.appendChild($intro);
  return $home;
}
