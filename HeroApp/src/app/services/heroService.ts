import { Injectable } from '@angular/core';

import {Hero} from '../../models/hero';

@Injectable()
export class heroService{
	private heroes: Hero[] = [
		new Hero('Superman','Kent Clarke', 85),
		new Hero('Batman','Bruce Wayne', 95),
		new Hero('Cat Woman','Selina Kyle', 60),
		new Hero('Hulk','Dr. David Banner', 85),
		new Hero('Spiderman','Peter Parker', 90),
		new Hero('Thor','Thor Odinson', 50)
	];

	getAll():Hero[]{
		return this.heroes;
	}
}