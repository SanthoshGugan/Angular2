import { Component, OnInit } from '@angular/core';


// modals
 import {Hero} from '../../models/hero';
 import {heroService} from '../services/heroService';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  providers:[heroService]
})
export class HeroComponent implements OnInit {
	heroList: Hero[];
	selectedHero: Hero;
  constructor(private service:heroService) { }

  ngOnInit() {
  	this.heroList = this.service.getAll();
  	console.log("herolist",this.heroList);
  }

  selectHero(hero){
  	this.selectedHero = hero;
  }
}
