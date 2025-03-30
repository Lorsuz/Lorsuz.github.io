import { Projects } from "../exports/Projects.js";

import { Consumer } from "../classes/Consumer.js";

let contentTemplate = ( object ) => `
<li class="card">
	<div class="img">
		<img src="components/static/img/projects/${ object.image }" alt="${ object.image }">
	</div>
	<div class="animation">
		<div class="details">
		<h3>${ object.project }</h3>
			<div class="skill-tags">${ object.skills.map( ( skill ) => {
	return `<span class="tag">${ skill }</span>`;
} ).join( "" )
	}
			</div>
			<p>${ object.description }</p>
			<div class="links">
			${ object.repository ?
		`<a href="https://github.com/Lorsuz/${ object.repository }" target="_blank">Repositório</a>` :
		""
	}
			
			${ object.pages ?
		`<a href="${ object.pages }" target="_blank">Web Site</a>` :
		""
	}

			${ !object.pages && !object.repository ?
		`<span>Ainda não há links disponíveis para este projeto!!</span>` :
		""
	}
			</div>
		</div>
	</div>
</li>
`;

new Consumer( "#projects-container", contentTemplate, Projects );