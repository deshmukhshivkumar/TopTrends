import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {News} from './news';
import {NewsService} from './news.service';

@Component({
  selector: 'my-heroes',
  templateUrl : './news.component.html',
  styleUrls: [ './news.component.css' ]
})

export class NewsComponent implements OnInit {

	newsFeeds : News[];

	constructor (
		private router : Router,
		private newsService: NewsService
	){}

	getHeroes():  void {
  		this.newsService.getNews().then(feeds => this.newsFeeds = feeds);
	};

	ngOnInit(): void {
		this.getHeroes();
	}

	// onSelect(hero: Hero): void {
	// 	this.selectedHero = hero;

	// };

	// gotoDetail(): void {
  	// 	this.router.navigate(['/detail', this.selectedHero.id]);
	// }
}




