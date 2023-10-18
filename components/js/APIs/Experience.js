import Slide from "../classes/Slide.js";

let Experience = document.querySelector( "#experience-container" );
let dotsContainer = document.querySelector( "main section.about .container .geral-data .data-self .xp .slides .dots-container" );

async function fetchData () {
	try {
		const response = await fetch( "data.json" );
		const data = await response.json();

		data.experience.forEach( ( card, index ) => {
			Experience.innerHTML +=
				` 
        <li class="slides-pag ${ index == 0 ? "active" : "" }">
          <h4>${ card.area }</h4>
          <p>${ card.description }</p>
        </li>
        `;
			dotsContainer.innerHTML += `<li class="dot ${ index == 0 ? "active" : "" }"></li>`;
		} );

		new Slide(
			"main section.about .container .geral-data .data-self .xp .slides #experience-container li",
			"main section.about .container .geral-data .data-self .xp .slides .prev",
			"main section.about .container .geral-data .data-self .xp .slides .next",
			"main section.about .container .geral-data .data-self .xp .slides .dots-container .dot"
		);
	} catch ( error ) {
		console.error( "Error fetching data:", error );
	}
}

fetchData();



