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

  constructor(
    private http: HttpClient
    ) { }

  token = {
    header: new HttpHeaders().set('Authorization', environment.token)
  }

  localToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Njc5MzA0NDgsInVzZXJfbmFtZSI6ImJhdGlzdGFzZDY3OEBnbWFpbC5jb20iLCJhdXRob3JpdGllcyI6WyJST0xFX0FETUlOIiwiUk9MRV9PUEVSQVRPUiJdLCJqdGkiOiIxZDk4ZDM4YS04Y2ZlLTQ5OGUtOGQ0Ni04YmE2NDU2ZmU2YjAiLCJjbGllbnRfaWQiOiJzbm93ZWVhcGkiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXX0.LCyviVLzeFBKFh_uFFUBmn7YIUTSjiTCkk77NHOkML4"

  getAllThemes(page: number): Observable<PagedObj>{

    const url = this.apiUrl+"/themes?page="+page+"&linesPerPage=10&direction=ASC&orderBy=name"

    console.log(url)
    let headers = new HttpHeaders({
      //'Authorization': 'Bearer '+ environment.token
      'Authorization': 'Bearer '+ this.localToken
    })

    let options = { headers: headers}

    return this.http.get<PagedObj>(url, options)
  }

  getById(id: number): Observable<Theme>{
    let headers = new HttpHeaders({
      //'Authorization': 'Bearer '+ environment.token
      'Authorization': 'Bearer '+ this.localToken
    })

    let options = { headers: headers}
    return this.http.get<Theme>(this.apiUrl+`/themes/${id}`, options)
  }

  postTheme(theme: Theme): Observable<Theme>{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer '+ environment.token
    })

    let options = { headers: headers}

    return this.http.post<Theme>(this.apiUrl+"/themes", theme, options)
  }

  putTheme(theme: Theme): Observable<Theme>{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer '+ environment.token
    })

    let options = { headers: headers}

    return this.http.put<Theme>(this.apiUrl+`/themes/${theme.id}`, theme, options)
  }

  deleteTheme(id: number){
    let headers = new HttpHeaders({
      'Authorization': 'Bearer '+ environment.token
    })

    let options = { headers: headers}

    return this.http.delete(this.apiUrl+`/themes/${id}`, options)
  }


}
