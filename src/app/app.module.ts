import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; 
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewsService } from './news.service';

import { NewsComponent } from './news.component';
import { NewsDetailComponent } from './news-detail.component';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
	  NewsDetailComponent,
    DashboardComponent
  ],
  
  imports: [
    BrowserModule,
	  FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  
  providers: [
   NewsService
  ],
  
  bootstrap: [AppComponent]
})

export class AppModule { 

}
