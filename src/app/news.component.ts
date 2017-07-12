import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

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
		private newsService: NewsService,
		private location: Location
	){}

	getNews():  void {
  		this.newsService.getNews().then(feeds => this.newsFeeds = feeds);		  
	};

	ngOnInit(): void {		
		this.getNews();
	}

	goBack(): void {
  		this.location.back();
	}
}




