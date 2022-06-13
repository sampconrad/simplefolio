import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

const toggleSwitch = document.querySelector('input[type="checkbox"]');
// const toggleIcon = document.getElementById("toggle-icon");

// Portuguese Styling
function ptBr() {
  // document.getElementById("flag").setAttribute("src", "/assets/flagBR.png");
  document.getElementById("toggle-text").innerHTML = "PT-BR";
  // document.getElementById("flag").innerHTML.src = "/assets/flagBR.png";
  // toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
}

// English Styling
function enUs() {
  // document.getElementById("flag").setAttribute("src", "/assets/flagUK.png");
  document.getElementById("toggle-text").innerHTML = "EN-US";
  // toggleIcon.children[0].textContent = "EN-US";
  // toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
}

// LANGUAGE FUNCTIONS

// PT-BR
function languagePT() {
  // HERO
  document.getElementById(
    "hero-intro"
  ).innerHTML = `Olá. Me chamo <span class="text-color-main typed-out">Conrado Sampaio</span>
          <br />
          Sou um Desenvolvedor Full-Stack`;
  // KNOW MORE
  document.getElementById("know-more").innerHTML = "Saiba Mais";

  // ABOUT SECTION
  document.getElementById("aboutTitle").innerHTML = "Sobre mim";
  document.getElementById("firstQuote").innerHTML =
    "Após me encontrar insatisfeito com minha trajetória de carreira, ingressei em 2021 em um curso para iniciantes na programação, onde para minha surpresa, acabei me apaixonando.";
  document.getElementById("secondQuote").innerHTML =
    "Depois de um ano - e mais alguns cursos - estou criando projetos full-stack com React, servidores web em Node, banco de dados com PostgreSQL, e mais uma variedade de habilidades que acumulei nessa jornada. Você pode vê-las em prática nos meus projetos abaixo!";
  document.getElementById("viewResume").innerHTML = "Meu Currículo";
  // THIS DOESN'T WORK FOR SOME UNKOWN REASON
  // document.getElementById("viewResume").href = "assets/resumePtBr.pdf";
  document
    .getElementById("viewResume")
    .setAttribute(
      "href",
      "https://drive.google.com/file/d/166wIZXCgzBa0BayBchH0K2YcyLy4n62z/view"
    );
  document.getElementById("viewProjects").innerHTML = "Projetos";

  // PROJECTS
  document.getElementById("projectsTitle").innerHTML = "Projetos";

  // SEE LIVE
  let seeLive = document.querySelectorAll(".seeLive");
  seeLive.forEach((el) => (el.innerHTML = "Veja ao Vivo"));

  // SOURCE CODE
  let sourceCode = document.querySelectorAll(".sourceCode");
  sourceCode.forEach((el) => (el.innerHTML = "Código-fonte"));

  // BUILT WITH
  let builtWith = document.querySelectorAll(".builtWith");
  builtWith.forEach((el) => (el.innerHTML = "Criado Com:"));

  // NETFLIX CLONE
  document.getElementById(
    "netflixclone"
  ).innerHTML = `Demo de um clone do Netflix construído em React com toda informação da página em tempo-real retirada da <a target="_blank" href="https://www.clarifai.com/">API The Movie Database</a> e apresentada ao usuário de forma dinâmica em uma página completamente responsiva.`;

  // UBER CLONE
  document.getElementById(
    "uber-clone"
  ).innerHTML = `Clone do Uber em React Native usando a <a target="_blank" href="https://developers.google.com/maps/documentation/distance-matrix">Google Distance Matrix API</a> para calcular quilometragem, tempo de viagem e preço estimado, a <a target="_blank" href="https://developers.google.com/maps/documentation/places/web-service">Google Places API</a> para a funcionalidade de auto-completar texto, e <a target="_blank" href="https://developers.google.com/maps/documentation/directions">APIs Google Directions</a> & <a target="_blank" href="https://developers.google.com/maps/documentation/javascript">Google Maps JS</a> para criar um mapa interativo que traça rotas entre ponto A e B.`;

  // STORE
  document.getElementById("store").innerHTML =
    "Front-end totalmente responsivo para um website E-commerce usando HTML, CSS e JavaScript.";

  // TRAVELBNB
  document.getElementById("travelbnb").innerHTML =
    "Front-end totalmente responsivo para um marketplace de alojamento turístico usando HTML, CSS e JavaScript.";

  // SMART BRAIN
  document.getElementById(
    "smartBrain"
  ).innerHTML = `Aplicação de reconhecimento facial com autenticação de usuário construída em React e Node.js usando a <a target="_blank" href="https://www.clarifai.com/">API Clarifai</a>. Dados sensíveis são seguramente salvos em um banco de dados PostgreSQL com o devido hashing the password através de Bcrypt.`;
  // LO-FI PLAYER
  document.getElementById(
    "lo-fiPlayer"
  ).innerHTML = `Player de música feito em JavaScript com controladores, tempo e barra de progresso em sincronia construídos do zero. Músicas tiradas de <a target="_blank" href="https://tunetank.com/genres/lo-fi-hip-hop/">Tunetank</a>.`;
  // SKELLY JOKESTER
  document.getElementById(
    "skellyJokester"
  ).innerHTML = `Uma aplicação que retorna piadas da  
                    <a target="_blank" href="https://sv443.net/jokeapi/v2/">API Joke</a> e através da funcionalidade Texto-para-Voz da <a target="_blank" href="https://www.voicerss.org/api/">API RSS</a>, narra a piada para o usuário enquanto mostra a mesma na tela.`;
  // LIGHT & DARK
  document.getElementById(
    "lightDark"
  ).innerHTML = `Demo de implementação de modo Escuro e Claro onde a paleta de cores é alterada completamente de acordo com a seleção do usuário, enquanto sua preferência é salva no Local Storage para futura referência`;
  // TAILWINDCSS
  document.getElementById(
    "tailwindcss"
  ).innerHTML = `Uma demonstração de <a target="_blank" href="https://tailwindcss.com/">TailwindCSS</a> sendo usado em conjunto à <a target="_blank" href="https://michalsnik.github.io/aos/">biblioteca de animação AOS</a> em um modelo <a target="_blank" href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation">Creative Tim</a>, no intuito de guiar a navegação do usuário pela página.`;
  // INFINITE DROOL
  document.getElementById(
    "infiniteDrool"
  ).innerHTML = `Um demo da funcionalidade de rolamento infinito semelhante ao encontrado em live feed de redes sociais. As imagens são tiradas da <a href="https://unsplash.com/documentation">API Unsplash</a> e o momento onde elas são carregadas é monitorado para que a animação seja escondida dinâmicamente.`;
  // QUOTE GENERATOR
  document.getElementById(
    "quoteGenerator"
  ).innerHTML = `Uma aplicação que retorna frases da <a href="https://type.fit/api/quotes">API Type.fit</a>, mostra uma aleatória, e permite ao usuário twittar a frase de sua conta pessoal do Twitter.`;

  // CONTACT
  document.getElementById("contactTittle").innerHTML = "Contato";
  document.getElementById("contactText").innerHTML = "Me mande um salve!";
  document.getElementById("mailMe").innerHTML = "Email";
}

// EN-US
function languageEN() {
  // HERO
  document.getElementById(
    "hero-intro"
  ).innerHTML = `Hi, my name is <span class="text-color-main typed-out">Conrado Sampaio</span>
          <br />
          I'm a Full-Stack Web Developer`;
  // KNOW MORE
  document.getElementById("know-more").innerHTML = "Know more";
  // ABOUT SECTION
  document.getElementById("aboutTitle").innerHTML = "About me";
  document.getElementById("firstQuote").innerHTML =
    "After graduating from Law School and finding myself unhappy with the direction my career was going, I started a web dev course on a whim and to my surprise I fell in love with it.";
  document.getElementById("secondQuote").innerHTML =
    "Flash forward a year - plus a few more courses - and I'm building full-stack projects with React, web servers on Node, databases with PostgreSQL, plus a variety of other skills I've picked up along the way. You can see them being put to action in my projects below!";
  document.getElementById("viewResume").innerHTML = "View Resume";
  // THIS DOESN'T WORK FOR SOME UNKOWN REASON
  // document.getElementById("viewResume").href = "assets/resume.pdf";
  document
    .getElementById("viewResume")
    .setAttribute("href", "/assets/resume.pdf");
  document.getElementById("viewProjects").innerHTML = "Projects";

  // PROJECTS
  document.getElementById("projectsTitle").innerHTML = "Projects";

  // SEE LIVE
  let seeLive = document.querySelectorAll(".seeLive");
  seeLive.forEach((el) => (el.innerHTML = "See Live"));

  // SOURCE CODE
  let sourceCode = document.querySelectorAll(".sourceCode");
  sourceCode.forEach((el) => (el.innerHTML = "Source Code"));

  // BUILT WITH
  let builtWith = document.querySelectorAll(".builtWith");
  builtWith.forEach((el) => (el.innerHTML = "Built With:"));

  // NETFLIX CLONE
  document.getElementById(
    "netflixclone"
  ).innerHTML = `Demo of a Netflix clone application built on React with all real-time information fetched from <a target="_blank" href="https://www.clarifai.com/">The Movie Database API</a> and dynamically displayed to the user on a fully responsive page.`;

  // UBER CLONE
  document.getElementById(
    "uber-clone"
  ).innerHTML = `Uber Clone built on React Native using the <a target="_blank" href="https://developers.google.com/maps/documentation/distance-matrix">Google Distance Matrix API</a> to calculate mileage, travel time, and estimated price, the <a target="_blank" href="https://developers.google.com/maps/documentation/places/web-service">Google Places API</a> for the auto-complete functionality, and <a target="_blank" href="https://developers.google.com/maps/documentation/directions">Google's Directions</a> & <a target="_blank" href="https://developers.google.com/maps/documentation/javascript">Maps JS APIs</a> to get an interactive map that traces a route from point A to B.`;

  // STORE
  document.getElementById("store").innerHTML =
    "Front-end for a fully responsive E-commerce Website using HTML, CSS, and JavaScript.";

  // TRAVELBNB
  document.getElementById("travelbnb").innerHTML =
    "Front-end for a fully responsive homestay marketplace website using HTML, CSS, and JavaScript.";

  // SMART BRAIN
  document.getElementById(
    "smartBrain"
  ).innerHTML = `Face recognition app with user authentication built on React
                    and Node.JS using the <a target="_blank" href="https://www.clarifai.com/">Clarifai API</a>. Sensitive data is securely stored on a PostgreSQL database with proper password hashing through Bcrypt.`;
  // LO-FI PLAYER
  document.getElementById(
    "lo-fiPlayer"
  ).innerHTML = `Music player built on JavaScript with controls, time and progress bar in sync built from scratch. Songs taken from
                    <a target="_blank" href="https://tunetank.com/genres/lo-fi-hip-hop/">Tunetank</a>.`;
  // SKELLY JOKESTER
  document.getElementById(
    "skellyJokester"
  ).innerHTML = `An application that fetches programming-related jokes from the 
                    <a target="_blank" href="https://sv443.net/jokeapi/v2/">Joke API</a> and through the Text-to-Speech functionality from <a target="_blank" href="https://www.voicerss.org/api/">RSS API</a> it voices the joke to the user all the while displayed the same joke on screen.`;
  // LIGHT & DARK
  document.getElementById(
    "lightDark"
  ).innerHTML = `Demo of Light & Dark mode implementation where the color palette is entirely changed according to what the user selects, while their preference is saved on their local storage for future reference.`;
  // TAILWINDCSS
  document.getElementById(
    "tailwindcss"
  ).innerHTML = `A demonstration of <a target="_blank" href="https://tailwindcss.com/">TailwindCSS</a> being used alongside the <a target="_blank" href="https://michalsnik.github.io/aos/">AOS Animation Library</a> on a <a target="_blank" href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation">Creative Tim template</a> in order to guide the user's experience through the page.`;
  // INFINITE DROOL
  document.getElementById("infiniteDrool").innerHTML = `A demo of seamless
                    infinite scroll functionality akin to social media apps. Images are fetched from the
                    <a href="https://unsplash.com/documentation">Unsplash API</a> and we're tracking the moment they're loaded
                    in order to dynamically hide the loading animation.`;
  // QUOTE GENERATOR
  document.getElementById(
    "quoteGenerator"
  ).innerHTML = `An application that fetches quotes from the <a href="https://type.fit/api/quotes">Type.fit API</a>, displays a random one, and allows the user to tweet out the quote from their personal Twitter account.`;

  // CONTACT
  document.getElementById("contactTittle").innerHTML = "Contact";
  document.getElementById("contactText").innerHTML =
    "I'd love to hear from you!";
  document.getElementById("mailMe").innerHTML = "Mail me";
}

// Switch Language Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "PT-BR");
    localStorage.setItem("theme", "PT-BR");
    // ptBr();
    languagePT();
  } else {
    document.documentElement.setAttribute("data-theme", "EN-US");
    localStorage.setItem("theme", "EN-US");
    // enUs();
    languageEN();
  }
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "PT-BR") {
    toggleSwitch.checked = true;
    languagePT();
  }
}
