import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Theme } from '../model/Theme';
import { Observable, catchError } from 'rxjs';
import { map } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  //Varia de acordo com o ambiente
  apiUrl: string = environment.apiUrl
  token: string = environment.token

  constructor(private http: HttpClient) { }

  setOptions() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic c25vd2VlYXBpOnNub3dlZWFwaQ=='
    })
    let options = { headers: headers};
    return options;
  }

  setOptionsBearer() {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + environment.token
    })
    let options = { headers: headers};
    return options;
  }

  //GET na API sem parametros no endpoint /users
  adminGetUserByUsername(username: string) : Observable<Theme>{
    return this.http.get<Theme>(this.apiUrl+"/users/find/"+username, this.setOptionsBearer())
  }

  getAllThemes() : Observable<Theme[]>{
    return this.http.get<Theme[]>(this.apiUrl+"/themes/list-all", this.setOptions())
  }

  getThemeByName(themeName: string) : Observable<Theme>{
    return this.http.get<Theme>(this.apiUrl+"/themes/"+themeName, this.setOptions())
  }

  insertTheme(themeToInsert: Theme) : Observable<Theme>{
    return this.http.post<Theme>(this.apiUrl+"/themes", themeToInsert, this.setOptionsBearer());
  }

  updateTheme(themeToUpdate: Theme) : Observable<Theme>{
    const url = `${this.apiUrl}/themes/${themeToUpdate.id}`;
    return this.http.put<Theme>(url, themeToUpdate, this.setOptionsBearer());
  }

  //DELETE na API utilizando ID no endpoint /users/{ID}
  deleteTheme(id: number) : Observable<void>{
    const url = `${this.apiUrl}/themes/${id}`;
    return this.http.delete<void>(url, this.setOptionsBearer());
  }
}
