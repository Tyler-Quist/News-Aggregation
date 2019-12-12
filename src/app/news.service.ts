import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  news = {articles:[]};
  newsSources = {sources:[]};
apiKey = '79f71650c65b4915adce89ce103cba40';
  constructor(private http: HttpClient) { }
getSources() {
  return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+ this.apiKey);
}
getArticles(){
  return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+ this.apiKey);
}
getArticlesById(source: String) {
  return this.http.get('https://newsapi.org/v2/top-headlines?sources='+ source +'&apiKey='+ this.apiKey);
}
}
