import Slide from "../classes/Slide.js";

let Experience = document.querySelector( "#experience-container" );
let dotsContainer = document.querySelector( ".data-self .xp .slides .dots-container" );

async function fetchData () {
	try {
		const response = await fetch( "data.json" );
		const data = await response.json();

		data.experience.forEach( ( card, index ) => {
			Experience.innerHTML +=
				` 
        <li class="slides-pag ${ index == 0 ? "active" : "" }">
				<div class="description">
				<h4>${ card.area }</h4>
							<div class="icon">
								<i class="${card.icon}"></i>
							</div>
							<p>${ card.description }</p>
						</div>
        </li>
        `;
			dotsContainer.innerHTML += `<li class="dot ${ index == 0 ? "active" : "" }"></li>`;
		} );

		new Slide(
			".data-self .xp .slides #experience-container li",
			".data-self .xp .slides .prev",
			".data-self .xp .slides .next",
			".data-self .xp .slides .dots-container .dot"
		);
	} catch ( error ) {
		console.error( "Error fetching data:", error );
	}
}

fetchData();



