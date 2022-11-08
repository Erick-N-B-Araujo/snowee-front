import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from '../model/Article';
import { PagedObj } from '../model/PagedObj';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  //Varia de acordo com o ambiente
  apiUrl: string = environment.apiUrl

  headers = new HttpHeaders({
    //'Authorization': 'Bearer '+ environment.token
    'Authorization': 'Bearer '+ environment.token
  })

  options = { headers: this.headers}

  constructor(
    private http: HttpClient
  ) { }

  getAllArticles(page: number): Observable<PagedObj>{

    const url = this.apiUrl+"/articles?page="+page+"&linesPerPage=10&direction=ASC&orderBy=name"

    return this.http.get<PagedObj>(url, this.options)
  }

  getById(id: number): Observable<Article>{
    return this.http.get<Article>(this.apiUrl+`/articles/${id}`, this.options)
  }

  postTheme(article: Article): Observable<Article>{
    return this.http.post<Article>(this.apiUrl+"/articles", article, this.options)
  }

  putTheme(article: Article): Observable<Article>{
    return this.http.put<Article>(this.apiUrl+`/articles/${article.id}`, article, this.options)
  }

  deleteTheme(id: number){
    return this.http.delete(this.apiUrl+`/articles/${id}`, this.options)
  }

}
