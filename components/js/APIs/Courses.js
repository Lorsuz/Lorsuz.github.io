
import { Courses } from "../exports/Courses.js";
import { Consumer } from "../classes/Consumer.js";

var itemCurrent = 0;
var sectionIndex = 0;
var sections = [ "Concluído", "Cursando", "Hobby" ];
var newUlStart = [ 0, 3, 8 ];

Courses.map( ( course ) => {

	function newSection ( index = 0 ) {
		if ( itemCurrent == index ) {
			let ulContentTemplate = ( object ) =>
				`
					<h4>${ object }</h4>
					<ul class="${ object }"></ul>
				`;

			new Consumer( `#courses-container `, ulContentTemplate, [ sections[ sectionIndex ] ] );

			sectionIndex++;
		}
	}

	for ( let index = 0; index < newUlStart.length; index++ ) {
		newSection( newUlStart[ index ] );
	}

	let liContentTemplate = ( object ) => `
		<li>
			<div class="progress">
				<div class="name-percent">
					<span>${ object.name }</span>	
					<div class="details">${ object.details }</div>
					<span>${ object.percent }%</span>
				</div>
				<div class="progress-bar">
					<div class="progress-value" style="width: ${ object.percent }%;"></div>
				</div>
			</div>
		</li>
	`;

	new Consumer( `#courses-container > ul.${ sections[ sectionIndex - 1 ] }`, liContentTemplate, [ course ] );

	itemCurrent++;
} );




