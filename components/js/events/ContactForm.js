var form = document.getElementById( "contact-form" );

const changeButtonStyle = ( button, bgColor, color, message, isDisabled ) => {
	button.style.backgroundColor = bgColor;
	button.style.color = color;
	button.innerHTML = message;
	button.disabled = isDisabled;
	setTimeout( () => {
		changeButtonStyle( button, "var(--background-min)", "var(--text-main)", "Send e-mail", false );
	}, 15000 );
};

async function handleSubmit ( event ) {
	event.preventDefault();
	var submitButton = document.getElementById( "submit-button" );
	changeButtonStyle( submitButton, "yellow", "var(--text-main)", "Sending...", true );
	var data = new FormData( event.target );
	if ( localStorage.getItem( "formSent" ) ) {
		changeButtonStyle( submitButton, "red", "white", "You have already sent a message!", true );
		return;
	}
	fetch( event.target.action, {
		method: form.method,
		body: data,
		headers: {
			'Accept': 'application/json'
		}
	} ).then( response => {
		console.log( response );
		if ( response.ok ) {
			localStorage.setItem( "formSent", true );
			changeButtonStyle( submitButton, "green", "white", "Thanks for your submission!", true );
			form.reset();
		} else {
			response.json().then( data => {
				if ( Object.hasOwn( data, 'errors' ) ) {
					console.log( data[ "errors" ].map( error => error[ "message" ] ).join( ", " ) );
				} else {
					changeButtonStyle( submitButton, "red", "white", "Oops! Error submitting your form", false );
				}
			} );
		}
	} ).catch( error => {
		console.log( error );
		changeButtonStyle( submitButton, "red", "white", "Oops! Error submitting your form", false );
	} );
}

form.addEventListener( "submit", handleSubmit );