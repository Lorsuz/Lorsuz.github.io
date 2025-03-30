const stars = document.querySelectorAll( 'article.box > div .content ul li' );
stars.forEach( ( star ) => {
	star.addEventListener( 'mouseover', () => {
		if ( star.classList.contains( 'filled' ) ) {
			star.classList.remove( 'filled' );
		} else {
			star.classList.add( 'filled' );
		}
	} );
} );