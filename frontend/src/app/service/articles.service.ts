import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';
import { Article } from '../model/Article';
import { Observable } from 'rxjs';
import { PagedObj } from '../model/PagedObj';

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

  editArticle(articleToUpdate: Article) : Observable<Article>{
    const url = `${this.apiUrl}/${articleToUpdate.id}`;
    return this.http.put<Article>(url, articleToUpdate, this.httpService.setOptionsBearer())
  }

  findById(id: number){
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Article>(url, this.httpService.setOptions())
  }

  findByTitleLike(title: string){
    const url = `${this.apiUrl}/title/${title}`;
    return this.http.get<Article[]>(url, this.httpService.setOptions())
  }

  getAllArticlesPaged(page: number): Observable<PagedObj>{
    const url = this.apiUrl+"/list-all?page="+page+"&linesPerPage=9&direction=DESC&orderBy=id"
    return this.http.get<PagedObj>(url)
  }
}
