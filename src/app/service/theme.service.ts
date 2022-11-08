import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PagedObj } from '../model/PagedObj';
import { Theme } from '../model/Theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
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

  getAllThemes(page: number): Observable<PagedObj>{

    const url = this.apiUrl+"/themes?page="+page+"&linesPerPage=10&direction=ASC&orderBy=name"

    return this.http.get<PagedObj>(url, this.options)
  }

  getById(id: number): Observable<Theme>{
    return this.http.get<Theme>(this.apiUrl+`/themes/${id}`, this.options)
  }

  postTheme(theme: Theme): Observable<Theme>{
    return this.http.post<Theme>(this.apiUrl+"/themes", theme, this.options)
  }

  putTheme(theme: Theme): Observable<Theme>{
    return this.http.put<Theme>(this.apiUrl+`/themes/${theme.id}`, theme, this.options)
  }

  deleteTheme(id: number){
    return this.http.delete(this.apiUrl+`/themes/${id}`, this.options)
  }
}
