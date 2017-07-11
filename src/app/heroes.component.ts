import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService} from './hero.service';

import {News} from './news';
import {NewsService} from './news.service';

@Component({
  selector: 'my-heroes',  
  templateUrl : './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})

export class HeroesComponent implements OnInit {
	
	heroes  : Hero[];
	selectedHero: Hero;
	newsFeeds : News[];

	constructor (
		private router : Router,
		private heroService: HeroService,
		private newsService: NewsService
	){}	
	
	getHeroes():  void {
  		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
		this.newsService.getNews().then(feeds => this.newsFeeds = feeds);
	};

	ngOnInit(): void {
		this.getHeroes();
	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
		
	};
	
	gotoDetail(): void {
  		this.router.navigate(['/detail', this.selectedHero.id]);
	}
}




