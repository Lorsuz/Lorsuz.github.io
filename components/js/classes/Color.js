class Color {
	body = document.body;

	constructor ( input, rootVar ) {
		this.input = document.querySelector( input );
		this.rootVar = rootVar;
		if ( localStorage.getItem( 'color' ) ) {
			this.input.value = localStorage.getItem( 'color' );
			this.body.style.setProperty( this.rootVar, this.input.value );
		} else {
			this.input.value = localStorage.getItem( 'color' ) || getComputedStyle( this.body ).getPropertyValue( this.rootVar );
		}
		this.init();
	}

	init () {
		this.input.addEventListener( 'input', () => {
			this.valueColor = this.input.value;
			this.changeColor();
		} );
	}

	changeColor () {
		document.cookie.indexOf( "acceptedCookies=true" ) !== -1
			? localStorage.setItem( 'color', this.valueColor )
			: localStorage.removeItem( 'color' );

		this.body.style.setProperty( this.rootVar, this.valueColor );
	}
}

const color = new Color( "#theme input", '--skin-color' );