import { Component, OnInit } from '@angular/core';
import { Oauth2 } from 'src/app/model/Oauth2';
import { UserLogin } from 'src/app/model/UserLogin';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  oauth2: Oauth2 = new Oauth2
  userLogin: UserLogin = new UserLogin

  token: string
  constructor(private authService: AuthService) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  login(){
    this.oauth2.grant_type = "password"
    console.log(this.oauth2)
    const authToSave: Oauth2 = {...this.oauth2}
    console.log(this.authService
      .tokenOauth2("batistasd678@gmail.com", "1234"))
  }

  salvar(){
    this.authService.
    tokenOauth2(this.userLogin.username, this.userLogin.password)
      .subscribe({
        next: (resp) => {
          let strJson = JSON.stringify(resp)
          let json = JSON.parse(strJson)
          console.log(json.access_token)
          this.token = json.access_token
          this.userLogin.token = this.token
        }
      })
    this.authService.salvarLogin(this.userLogin)
    .subscribe({
      next: (resp) => {
        console.log(resp)
      }
    })
  }

  loginOauth2(){
    this.authService.
    tokenOauth2("batistasd678@gmail.com", "1234")
      .subscribe({
        next: (resp) => {
          let strJson = JSON.stringify(resp)
          let json = JSON.parse(strJson)
          console.log(json.access_token)
          this.token = json.access_token
        }
      })
    
  }
}
