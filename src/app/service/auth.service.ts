import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //Varia de acordo com o ambiente
  apiUrl: string = environment.apiUrl
  
  constructor(
    private http: HttpClient
  ) { }

  login(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>(this.apiUrl+"/users/login" , userLogin)
  }

  signin(userSignin: User): Observable<User>{
    return this.http.post<User>(this.apiUrl+"/users/signin" , userSignin)
  }
}
