const typeMachineElement = document.getElementById( 'typing' );
typeMachineElement.textContent = '';
const words = [ 'Fullstack', 'Freelancer', 'Computer Technician', 'Programmer', 'Web Developer' ];
let index = 0;
let currentWord = '';

function writeWord () {
	if ( index === words.length ) {
		index = 0;
	}

	currentWord = words[ index ];
	let currentLetter = 0;

	const writeLetter = setInterval( () => {
		typeMachineElement.textContent += currentWord.charAt( currentLetter );

		currentLetter++;

		if ( currentLetter === currentWord.length ) {
			clearInterval( writeLetter );

			setTimeout( clearWord, 2000 );
		}
	}, 100 );
}

function clearWord () {
	let removedLetters = 0;

	const clearLetter = setInterval( () => {
		typeMachineElement.textContent = typeMachineElement.textContent.slice( 0, -1 );

		removedLetters++;

		if ( removedLetters === currentWord.length ) {
			clearInterval( clearLetter );
			index++;
			setTimeout( writeWord, 1000 );
		}
	}, 100 );
}

writeWord();