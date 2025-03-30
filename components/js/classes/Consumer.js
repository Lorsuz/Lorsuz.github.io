export class Consumer {
	constructor ( parentElement, content, objects ) {
		this.parentElement = document.querySelector( parentElement );
		this.content = content;
		this.objects = objects;
		this.init();
	}

	init () {
		this.objects.map( ( object ) => {
			this.parentElement.innerHTML += this.content( object );
		} );
	}
}