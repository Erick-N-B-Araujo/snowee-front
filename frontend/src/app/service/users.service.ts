import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Observable, first } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { error } from 'jquery';

//Recebe o objeto, 
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //Varia de acordo com o ambiente
  apiUrl: string = environment.apiUrl
  token: string = environment.token

  constructor(private http: HttpClient) { }

  //POST na API com todos os campos do objeto preenchidos
  salvar(user: User) : Observable<User> {
    return this.http.post<User>(this.apiUrl+"/auth/signin", user);
  }

  //GET na API sem parametros no endpoint /users
  listar() : Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl)
  }

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
  adminGetUserByUsername(username: string) : Observable<User>{
    return this.http.get<User>(this.apiUrl+"/users/find/"+username, this.setOptionsBearer())
  }

  noAuthGetUserByUsername(username: string){
    return this.http.get<User>(this.apiUrl+"/users/find/"+username)
  }

  //GET na API sem parametros no endpoint /users
  adminGetAllUsers() : Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl+"/users/all", this.setOptions())
  }

  //DELETE na API utilizando ID no endpoint /users/{ID}
  deletar(id: number) : Observable<void>{
    const url = `${this.apiUrl}${id}`
    console.log(url)
    return this.http.delete<void>(url)
  }

  //PATCH na API utilizando ID no endpoint /users/{ID}, e observavel da classe modelo
  updateUser(updatedUser: User) : Observable<User>{
    const url = `${this.apiUrl}/users/${updatedUser.id}`
    return this.http.patch<User>(url, updatedUser, this.setOptionsBearer());
  }

  //PATCH na API utilizando ID no endpoint /users/{ID}/admin, e observavel da classe modelo
  elevarPermission(id: number) : Observable<User>{
    const url = `${this.apiUrl}${id}/admin`
    return this.http.patch<User>(url, {});
  }
}