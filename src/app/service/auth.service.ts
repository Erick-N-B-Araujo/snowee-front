import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Oauth2 } from '../model/Oauth2';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //Varia de acordo com o ambiente
  apiUrl: string = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }

  //POST na API com todos os campos do objeto preenchidos
  salvarLogin(userLogin: UserLogin) : Observable<UserLogin> {
    return this.http.post<UserLogin>(this.apiUrl+"/auth/login", userLogin);
  }

  tokenOauth2(username: string, password: string): Observable<Token>{
    //auth.grant_type = "password"
    //username = "batistasd678@gmail.com"
    //password = "1234"
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

  getUserLogged(username: string): Observable<UserLogin>{
    return this.http.get<UserLogin>(this.apiUrl+"/auth/login/"+username)
  }

  updateUserLogged(id: number, userLogged: UserLogin){
    return this.http.patch<UserLogin>(this.apiUrl+"/auth/login/"+id+"/logged", userLogged)
  }
}
