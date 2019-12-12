import { Component } from '@angular/core';
import { NewsService } from './news.service';
import {HttpClient, HttpClientModule, HttpErrorResponse} from '@angular/common/http';
import {error} from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
articles: Array<any>;
sources: Array<any>;
apiKey = '79f71650c65b4915adce89ce103cba40';
 error: string = null;
  constructor(private newsapi: NewsService,private http: HttpClient) {
    console.log('app component working');
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.newsapi.getArticles().subscribe(data => this.articles = data['articles']);
    this.newsapi.getSources().subscribe(data=> this.sources = data['sources']);
  }
  searchArticles(source: String){
    console.log("selected source is: "+  source);
    this.newsapi.getArticlesById(source).subscribe(data => this.articles = data['articles']);
  }
  reset() {
    this.newsapi.getArticles().subscribe(data => this.articles = data['articles']);
  }
  getSources(){

  }
}
