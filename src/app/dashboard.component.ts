import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';

import { News } from './news';
import { NewsSource } from './newsSource';
import {NewsService } from './news.service';

@Component({
  selector: 'my-dashboard',
  templateUrl:'./dashboard.component.html',
  styleUrls :  [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit{

    heroes : Hero[] = [];
    newsSources : NewsSource[] = [];

    constructor (private heroService: HeroService, private newsSerice : NewsService) { 
        
    }

    ngOnInit() : void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes);

        this.newsSerice.getSources()
            .then(sources => this.newsSources = sources);      

    }
}