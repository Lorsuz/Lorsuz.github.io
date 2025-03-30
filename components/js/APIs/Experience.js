import { Experience } from "../exports/Experience.js";

import { Consumer } from "../classes/Consumer.js";

let buttonContentTemplate = ( object ) => `
	<li>
		<div class="progress-container">
			<div class="progress-bar"></div>
		</div>
		<span>${ object.buttonContent }</span>
	</li>
`;

let cardContentTemplate = ( object ) => `
<li>
	<h4>${ object.area }</h4>
	<h5><i class="${ object.icon }"></i><span>${ object.buttonContent }</span></h5>
	<p>${ object.desc }</p>
</li>
`;

new Consumer( ".xp-container .pagination ul", buttonContentTemplate, Experience );

new Consumer( ".xp-container .cards ul", cardContentTemplate, Experience );


