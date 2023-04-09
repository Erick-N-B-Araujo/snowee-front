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

  token = environment.token

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

  getAllThemes(page: number): Observable<PagedObj>{

    const url = this.apiUrl+"/themes?page="+page+"&linesPerPage=10&direction=ASC&orderBy=name"
    let options = this.setOptions()
    return this.http.get<PagedObj>(url, options)
  }

  getById(id: number): Observable<Theme>{
    let options = this.setOptions()
    return this.http.get<Theme>(this.apiUrl+`/themes/${id}`, options)
  }

  getAllList(): Observable<Theme[]>{
    return this.http.get<Theme[]>(this.apiUrl+"/themes/list-all")
  }

  postTheme(theme: Theme): Observable<Theme>{
    let options = this.setOptions()
    return this.http.post<Theme>(this.apiUrl+"/themes", theme, options)
  }

  putTheme(theme: Theme): Observable<Theme>{
    let options = this.setOptions()
    return this.http.put<Theme>(this.apiUrl+`/themes/${theme.id}`, theme, options)
  }

  deleteTheme(id: number){
    let options = this.setOptions()
    return this.http.delete(this.apiUrl+`/themes/${id}`, options)
  }
}
