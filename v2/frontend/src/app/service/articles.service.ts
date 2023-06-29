import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';
import { Article } from '../model/Article';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  apiUrl: string = environment.apiUrl+"/articles"

  constructor(
    private http: HttpClient,
    private httpService: HttpService
  ) { }

  getAllArticles() : Observable<Article[]>{
    return this.http.get<Article[]>(this.apiUrl, this.httpService.setOptions())
  }

  insertArticle(articleToInsert: Article) : Observable<Article>{
    return this.http.post<Article>(this.apiUrl, articleToInsert, this.httpService.setOptionsBearer())
  }
}
