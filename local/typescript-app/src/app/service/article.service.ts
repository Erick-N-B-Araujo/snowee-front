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

  constructor(
    private http: HttpClient
  ) { }

  setOptions(){
    let headers = new HttpHeaders({
      //'Authorization': 'Bearer '+ environment.token
      'Authorization': 'Bearer '+ environment.token
    })
    let options = { headers: headers}
    return options
  }

  getAllArticles(page: number): Observable<PagedObj>{
    const url = this.apiUrl+"/articles/list-all?page="+page+"&linesPerPage=3&direction=ASC&orderBy=title"
    return this.http.get<PagedObj>(url)
  }

  getById(id: number): Observable<Article>{
    let options = this.setOptions()
    return this.http.get<Article>(this.apiUrl+`/articles/${id}`)
  }

  getAllList(): Observable<Article[]>{
    let options = this.setOptions()
    return this.http.get<Article[]>(this.apiUrl+"/articles")
  }

  postArticle(article: Article): Observable<Article>{
    let options = this.setOptions()
    return this.http.post<Article>(this.apiUrl+"/articles", article, options)
  }

  putArticle(article: Article): Observable<Article>{
    let options = this.setOptions()
    return this.http.put<Article>(this.apiUrl+`/articles/${article.id}`, article, options)
  }

  deleteArticle(id: number){
    let options = this.setOptions()
    return this.http.delete(this.apiUrl+`/articles/${id}`, options)
  }

}
