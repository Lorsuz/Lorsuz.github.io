window.addEventListener( "scroll", () => {
	var backToTopButton = document.getElementById( "back-to-top-btn" );
	backToTopButton.classList.toggle( "appear", window.scrollY > 0 );
} );

const buttonBackToTop = document.getElementById( 'back-to-top-btn' );

function scrollToTop ( event ) {
	event.preventDefault();
	smoothScrollTo( 0, 0 );
}

buttonBackToTop.addEventListener( "click", scrollToTop );

function smoothScrollTo ( endX, endY, duration ) {
	const startX = window.scrollX || window.pageXOffset;
	const startY = window.scrollY || window.pageYOffset;
	const distanceX = endX - startX;
	const distanceY = endY - startY;
	const startTime = new Date().getTime();

	duration = typeof duration !== "undefined" ? duration : 400;

	const easeInOutQuart = ( time, from, distance, duration ) => {
		if ( ( time /= duration / 2 ) < 1 )
			return ( distance / 2 ) * time * time * time * time + from;
		return ( -distance / 2 ) * ( ( time -= 2 ) * time * time * time - 2 ) + from;
	};

	const timer = setInterval( () => {
		const time = new Date().getTime() - startTime;
		const newX = easeInOutQuart( time, startX, distanceX, duration );
		const newY = easeInOutQuart( time, startY, distanceY, duration );
		if ( time >= duration ) {
			clearInterval( timer );
		}
		window.scroll( newX, newY );
	}, 1000 / 60 );
}
