import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../model/UserLogin';
import { environment } from 'src/environments/environment';
import { Token } from '../model/Token';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //Varia de acordo com o ambiente
  apiUrl: string = environment.apiUrl
  private loggedUser: string = "Erick"
  private subject = new Subject<any>();

  constructor(
    private http: HttpClient
  ) { }

  sendClickEvent() {
    this.subject.next(this.loggedUser);
  }
  
  getClickEvent(): Observable<any>{ 
    return this.subject.asObservable();
  }

  tokenOauth2(username: string, password: string): Observable<Token>{
    let bodyAuth = new URLSearchParams();
    bodyAuth.set("grant_type", "password")
    bodyAuth.set("username", username)
    bodyAuth.set("password", password)
    
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic c25vd2VlYXBpOnNub3dlZWFwaQ=='
    })

    let options = { headers: headers}

    return this.http
      .post<Token>(this.apiUrl+"/oauth/token", bodyAuth, options)
  }

  setOptions() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic c25vd2VlYXBpOnNub3dlZWFwaQ=='
    })
    let options = { headers: headers};
    return options;
  }

  //GET na API sem parametros no endpoint /users
  adminGetAllUsersLogged() : Observable<UserLogin[]>{
    return this.http.get<UserLogin[]>(this.apiUrl+"/auth/login", this.setOptions())
  }

  getInfoFromUser(userToLogin: UserLogin){
    return this.http.post<UserLogin>(this.apiUrl+"/auth/login", userToLogin)
  }

  isLogged(){
    let ok: boolean = false
    if (environment.token != '' && environment.isLogged == true){
      ok = true
    }
    return ok
  }

  isAdmin(){
    let ok: boolean = false;
    if (environment.isAdmin == true && environment.token != '' && environment.isLogged == true){
      return ok=true;
    } else{
      return ok;
    }
  }
}
