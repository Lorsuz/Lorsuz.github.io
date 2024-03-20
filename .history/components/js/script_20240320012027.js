import "./APIs/Education.js";
import "./APIs/Experience.js";
import "./APIs/HardSkills.js";
import "./APIs/Services.js";
import "./APIs/Projects.js";

import "./events/CustomMouseOver.js";
import "./events/CustomMouseMove.js";
import "./events/HoverOccurredOnStar.js";
import "./events/ContactForm.js";

import "./classes/Color.js";
import "./classes/Mode.js";
import "./classes/Section.js";


// Seleciona o botão
var backToTopButton = document.getElementById( "back-to-top-btn" );

// Quando a página é rolada
window.onscroll = function () { scrollFunction(); };

function scrollFunction () {
	// Se a rolagem for maior que 20 pixels, exibe o botão
	if ( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) {
		backToTopButton.style.display = "block";
	} else {
		backToTopButton.style.display = "none";
	}
}

// Quando o botão é clicado, rola de volta para o topo com animação
backToTopButton.addEventListener( "click", function () {
	// Rola suavemente para o topo
	window.scrollTo( {
		top: 0,
		behavior: "smooth" // Adiciona animação suave
	} );
} );
