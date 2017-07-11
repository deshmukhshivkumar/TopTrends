import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { News } from './news';
import { NewsService } from './news.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './news.component.html',
  styleUrls: [ './news.component.css' ]
})


export class NewsDetailComponent implements OnInit{
	newsFeeds : News[] = [];
	
	constructor(
		private newsService : NewsService,
		private route: ActivatedRoute,
		private location: Location
	) {};

	ngOnInit(): void {	
		this.route.paramMap
			.switchMap((params: ParamMap) => this.newsService.getNewsBySource( params.get('id')))
			.subscribe(feeds => this.newsFeeds = feeds);
	};

	goBack(): void {
  		this.location.back();
	}
}