import { posts } from './posts.mock';
import { Component } from '@angular/core';
import { post } from 'selenium-webdriver/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'app';
	creditcardNumber = 1111222233334444;
	name = 'Name';
	post: Array<Post>;
	habilitado;
	constructor() {
		this.post = posts;
		this.habilitado = true;
	}

	newName(event) {
		if (event.keyCode === 13) {
			this.name = event.target.value;
		}
	}
	borrarFila(evento) {
		evento.path[1].style.display = 'none';
	}
}
