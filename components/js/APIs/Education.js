import { Education } from "../exports/Education.js";

import { Consumer } from "../classes/Consumer.js";

let contentTemplate = (object) => `
<li>
	<div class="point"></div>
	<div class="time"><i class="fa-solid fa-calendar"></i><span>${object.startYear} - ${object.finalYear}</span></div>
	<h4>${object.nameSchool}</h4>
	<p>${object.description}</p>
</li>
`;

new Consumer("#education-container", contentTemplate, Education);