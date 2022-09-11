import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl: string = environment.apiUrl
  constructor(private http: HttpClient) { }

  salvar(user: User) : Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  listar() : Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl)
  }

  deletar(id: number) : Observable<void>{
    const url = `${this.apiUrl}${id}`
    console.log(url)
    return this.http.delete<void>(url)
  }

  elevarPermission(id: number) : Observable<User>{
    const url = `${this.apiUrl}${id}/admin`
    return this.http.patch<User>(url, {});
  }
}