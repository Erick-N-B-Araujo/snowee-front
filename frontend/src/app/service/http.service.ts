import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
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
}
