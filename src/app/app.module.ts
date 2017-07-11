import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; 
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroService } from './hero.service';
import { NewsService } from './news.service';

import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
 
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
	  HeroDetailComponent,
    DashboardComponent
  ],
  
  imports: [
    BrowserModule,
	  FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  
  providers: [
    HeroService,
    NewsService
  ],
  
  bootstrap: [AppComponent]
})

export class AppModule { 

}
