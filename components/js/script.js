import "./APIs/Education.js";
import "./APIs/Experience.js";
import "./APIs/Courses.js";
import "./APIs/HardSkills.js";
import "./APIs/Services.js";
import "./APIs/Projects.js";

import "./events/CustomMouseOver.js";
import "./events/CustomMouseMove.js";
import "./events/HoverOccurredOnStar.js";
import "./events/ContactForm.js";
import "./events/NavBarMobile.js";
import "./events/TypeMachine.js";
import "./events/Slide.js";

// import "./classes/Color.js";
// import "./classes/Mode.js";
import "./classes/Section.js";

if ( document.cookie.indexOf( "acceptedCookies=true" ) === -1 ) {
	localStorage.removeItem( 'dark' );
	localStorage.removeItem( 'color' );
}