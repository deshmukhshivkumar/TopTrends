import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { News } from './news';
import { NewsSource } from './newsSource';

@Injectable()
export class NewsService{     
    private baseUrl = 'https://newsapi.org/v1/articles?';
    private newsUrl = 'https://newsapi.org/v1/articles?source=the-hindu&apiKey=ea0d47f672104628b4f2d9a5a65a7487';
    private newsSourceUrl = "https://newsapi.org/v1/sources";

    constructor(private http: Http) { }

    getNews(): Promise<News[]> {
        return this.http
                .get(this.newsUrl)
                .toPromise()
                .then(response => response.json().articles as News[])
                .catch(this.handleError);
    }
    
    getNewsBySource (id: string): Promise<News[]> {
        var url = this.baseUrl +"source=" +  id + "&apiKey=ea0d47f672104628b4f2d9a5a65a7487";

        var data = this.http
                .get(url)
                .toPromise()
                .then(response => response.json().articles as News[])
                .catch(this.handleError);
        
        return data;
    } 

    getSources(): Promise<NewsSource[]>{
        return this.http
                .get(this.newsSourceUrl)
                .toPromise()
                .then(response => response.json().sources as NewsSource[])
                .catch(this.handleError);                
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); 
        return Promise.reject(error.message || error);
    }
}
