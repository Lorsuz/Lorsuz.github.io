var buttons = document.querySelectorAll( '.xp-container .pagination li' );
var cards = document.querySelectorAll( '.xp-container .cards li' );

var cardCurrent = 0;
buttons[ cardCurrent ].classList.add( 'active' );
cards[ cardCurrent ].classList.add( 'active' );

var interval;

function initInterval () {
	interval = setInterval( () => {
		cardCurrent = cardCurrent < buttons.length - 1 ? cardCurrent + 1 : 0;
		activeCard( cardCurrent );
	}, 10000 );
}

initInterval();

buttons.forEach( ( element, index ) => element.addEventListener( 'click', () => {
	cardCurrent = index;
	restartInterval();
	activeCard( index );
} ) );

function activeCard ( index ) {
	cards.forEach( element => {
		element.classList.remove( 'active' );
	} );

	buttons.forEach( element => {
		element.classList.remove( 'active' );
	} );

	buttons[ index ].classList.add( 'active' );
	cards[ index ].classList.add( 'active' );
}

function restartInterval () {
	clearInterval( interval );
	initInterval();
}

