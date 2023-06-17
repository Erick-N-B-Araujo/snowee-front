import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CpControllerService {

  constructor() { }

  isHomeActive(){
    let ok: boolean = false
    if (environment.isHomeActive){
      return ok=true
    } else {
      return ok
    }
  }

  isForumActive(){
    let ok: boolean
    if (environment.isForumActive){
      return ok=true
    } else {
      return ok=false
    }
  }

  isPortfolioActive(){
    let ok: boolean
    if (environment.isPortfolioActive){
      return ok=true
    } else {
      return ok=false
    }
  }

  isAboutActive(){
    let ok: boolean
    if (environment.isAboutActive){
      return ok=true
    } else {
      return ok=false
    }
  }

  isLoginActive(){
    let ok: boolean = false
    if (environment.isLoginActive){
      return ok=true
    } else {
      return ok
    }
  }
}
