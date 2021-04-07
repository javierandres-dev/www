'use strict';
// set up the view of the "cu" page
export default function Resume() {
  const spanish = navigator.language.startsWith('es'),
    $resume = document.createElement('section');
  $resume.classList.add('resume');
  $resume.innerHTML = null;
  if (spanish) {
    $resume.innerHTML = `
    `;
  } else {
    $resume.innerHTML = `
      <header class='resume--header'>
        <h1>javier andrés garzón patarroyo</h1>
        <h2>software developer</h2>
      </header>
      <div class='resume--left'>
        <figure>
          <img src='./app/images/photo.jpg' alt='software developer' />
          <figcaption>javier andrés</figcaption>
        </figure>
        <h3>contact</h3>
        <p>+57 300 560 0756</p>
        <p>https://www.javierandresgp.com</p>
        <p>https://www.linkedin.com/in/javierandresgp</p>
        <p>https://twitter.com/javierandresgp0</p>
        <p>info@javierandresgp.com</p>
        <h3>education</h3>
        <h4>Holberton School</h4>
        <h5>Software Academy</h5>
        <h6>Sep 2019 to present</h6>
        <p>Participantin the forming program of Full Stack Web Developer</p>
        <h3>references</h3>
        <h4>NicolazPérez</h4>
        <h5>Software Engenier at Holberton School</h5>
        <h6>Software Engineer and Education Lead</h6>
        <p>nicolaz.perez@holbertonschool.com</p>
        <h4>Jhoan ZamoraCaicedo</h4>
        <h5>Software Engenier at Holberton School</h5>
        <h6>Software Engineer and Educational Staff</h6>
        <p>1206@holbertonschool.com</p>
      </div>
      <div class='resume--right'>
        <h3>about me</h3>
        <p>
        </p>
        <h3>work experience</h3>
        <h4>Holberton School</h4>
        <h5>software developer</h5>
        <h6>Sep 2019 to present</h6>
        <p>About two years experience in Back-End and Front-End projects.</p>
        <h4>Autónomo / Independiente</h4>
        <h5>Comerciante / Soporte técnico</h5>
        <h6>Jan 2002 - Sep 2019 (17 years 9 months)</h6>
        <p>Comercialización de hardware, software y tecnología en general.</p>
        <p>Soporte técnico a empresas y particulares.</p>
        <h4>TEAM Computer</h4>
        <h5>Jefe departamento de soporte técnico</h5>
        <h6>Jan 1994 - Dec 2001 (8 years)</h6>
        <p>Jefe del departamento de soporte técnico.</p>
        <p>Ensamble de computadores, instalación de software, servidores, redes, mantenimiento.</p>
        <h3>skills</h3>
        <p>HTML   •   CSS   •   JavaScript   •   Node.js   •   React.js   •   TypeScript   •   Git   •   GitHub   •   Web Development
  •   Software Development</p>
      </div>
    `;
  }
  return $resume;
}
