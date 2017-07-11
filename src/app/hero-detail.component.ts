import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import {HeroService} from './hero.service';
import { Hero } from './hero';

import { News } from './news';
import { NewsService } from './news.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})


export class HeroDetailComponent implements OnInit{
	hero: Hero;
	newsFeeds : News[] = [];
	
	constructor(
		private heroService: HeroService,
		private newsService : NewsService,
		private route: ActivatedRoute,
		private location: Location
	) {};

	ngOnInit(): void {
		// this.route.paramMap
		// 	.switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
		// 	.subscribe(hero => this.hero = hero);
		
		this.route.paramMap
			.switchMap((params: ParamMap) => this.newsService.getNewsBySource( params.get('id')))
			.subscribe(feeds => this.newsFeeds = feeds);
	};

	goBack(): void {
  		this.location.back();
	}

}