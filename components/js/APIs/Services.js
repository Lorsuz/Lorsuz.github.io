import { Services } from "../exports/Services.js";

import { Consumer } from "../classes/Consumer.js";

let contentTemplate = ( object ) => `
<li class="card">
	<div class="i"><i class="fas fa-${ object.icon }"></i></div>
	<h2>${ object.service }</h2>
	<p>${ object.description }</p>
</li>
`;

new Consumer( "#services-container", contentTemplate, Services );