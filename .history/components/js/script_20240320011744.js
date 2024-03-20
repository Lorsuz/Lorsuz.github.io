import "./APIs/Education.js";
import "./APIs/Experience.js";
import "./APIs/HardSkills.js";
import "./APIs/Services.js";
import "./APIs/Projects.js";

import "./events/CustomMouseOver.js";
import "./events/CustomMouseMove.js";
import "./events/HoverOccurredOnStar.js";
import "./events/ContactForm.js";

import "./classes/Color.js"
import "./classes/Mode.js"
import "./classes/Section.js"


var backToTopButton = document.getElementById("back-to-top-btn");

// Quando a página é rolada
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // Se a rolagem for maior que 20 pixels, exibe o botão
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

// Quando o botão é clicado, rola de volta para o topo
backToTopButton.addEventListener("click", function() {
  document.body.scrollTop = 0; // Para navegadores Safari
  document.documentElement.scrollTop = 0; // Para outros navegadores
});