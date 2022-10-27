import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

//Recebe o objeto, 
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //Varia de acordo com o ambiente
  apiUrl: string = environment.apiUrl
  constructor(private http: HttpClient) { }

  //POST na API com todos os campos do objeto preenchidos
  salvar(user: User) : Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  //GET na API sem parametros no endpoint /users
  listar() : Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl)
  }

  //DELETE na API utilizando ID no endpoint /users/{ID}
  deletar(id: number) : Observable<void>{
    const url = `${this.apiUrl}${id}`
    console.log(url)
    return this.http.delete<void>(url)
  }

  //PATCH na API utilizando ID no endpoint /users/{ID}/admin, e observavel da classe modelo
  elevarPermission(id: number) : Observable<User>{
    //Logica de elevar esta no backend
    const url = `${this.apiUrl}${id}/admin`
    return this.http.patch<User>(url, {});
  }
}