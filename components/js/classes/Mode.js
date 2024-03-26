class Mode {
	times = 1;

	constructor ( button ) {

		this.defineElements( button );
		this.initBooleanDark();
	}

	defineElements ( button ) {
		this.buttons = document.querySelectorAll( button );
		this.icons = document.querySelectorAll( button + " i" );
		this.buttons.forEach( button => {
			button.addEventListener( "click", () => this.toggleMode() );
		} );
	}

	initBooleanDark () {
		this.dark = localStorage.getItem( 'dark' ) || "false";
		this.dark = this.dark === "false" ? false : true;
		if ( this.dark ) this.toggleIconAndTheme();
	}

	toggleMode () {
		this.dark = this.toggleIconAndTheme();
		document.cookie.indexOf( "acceptedCookies=true" ) !== -1
			? localStorage.setItem( 'dark', this.dark )
			: localStorage.removeItem( 'dark' );

	}

	toggleIconAndTheme () {
		document.body.classList.toggle( "dark" );
		setTimeout( () => {
			this.spinIcon();
			setTimeout( () => {
				this.forEachIcon( icon => icon.classList.toggle( 'fa-sun' ) );
				this.forEachIcon( icon => icon.classList.toggle( 'fa-moon' ) );
			}, 200 );
		}, this.times === 1 && this.dark ? 1500 : 0 );
		return !this.dark;
	}

	spinIcon () {
		this.forEachIcon( icon => icon.style.transform = `rotate(${ this.times * 360 }deg)` );
		this.times++;
	}

	forEachIcon ( instruction ) {
		this.icons.forEach( instruction );
	}
}

new Mode( "#theme button" );