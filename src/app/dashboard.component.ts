import { Component, OnInit } from '@angular/core';

import { News } from './news';
import { NewsSource } from './newsSource';
import {NewsService } from './news.service';

@Component({
  selector: 'my-dashboard',
  templateUrl:'./dashboard.component.html',
  styleUrls :  [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit{

    newsSources : NewsSource[] = [];

    constructor (private newsSerice : NewsService) { 
        
    }

    ngOnInit() : void {
        this.newsSerice.getSources()
            .then(sources => this.newsSources = sources);      

    }
}