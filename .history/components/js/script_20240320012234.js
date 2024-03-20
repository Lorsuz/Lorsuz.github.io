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


window.addEventListener( "scroll", () => {
	var header = document.querySelector( "header" );
	header.classList.toggle( "sticky", window.scrollY > 0 );
} );

const menuLinks = document.querySelectorAll( 'header #left nav a[href^="#"]' );

function getDistanceFromTheTop ( element ) {
	const id = element.getAttribute( "href" );
	return document.querySelector( id ).offsetTop;
}

// function nativeScroll(distanceFromTheTop) {
//   window.scroll({
//     top: distanceFromTheTop,
//     behavior: "smooth",
//   });
// }

function scrollToSection ( event ) {
	event.preventDefault();
	const distanceFromTheTop = getDistanceFromTheTop( event.target ) - 90;
	smoothScrollTo( 0, distanceFromTheTop );
}

menuLinks.forEach( ( link ) => {
	link.addEventListener( "click", scrollToSection );
} );

function smoothScrollTo ( endX, endY, duration ) {
	const startX = window.scrollX || window.pageXOffset;
	const startY = window.scrollY || window.pageYOffset;
	const distanceX = endX - startX;
	const distanceY = endY - startY;
	const startTime = new Date().getTime();

	duration = typeof duration !== "undefined" ? duration : 400;

	const easeInOutQuart = ( time, from, distance, duration ) => {
		if ( ( time /= duration / 2 ) < 1 )
			return ( distance / 2 ) * time * time * time * time + from;
		return ( -distance / 2 ) * ( ( time -= 2 ) * time * time * time - 2 ) + from;
	};

	const timer = setInterval( () => {
		const time = new Date().getTime() - startTime;
		const newX = easeInOutQuart( time, startX, distanceX, duration );
		const newY = easeInOutQuart( time, startY, distanceY, duration );
		if ( time >= duration ) {
			clearInterval( timer );
		}
		window.scroll( newX, newY );
	}, 1000 / 60 );
}
