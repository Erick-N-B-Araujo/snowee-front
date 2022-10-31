import { Component, OnInit } from '@angular/core';
import { Oauth2 } from 'src/app/model/Oauth2';
import { Permission } from 'src/app/model/Permission';
import { UserLogin } from 'src/app/model/UserLogin';
import { AuthService } from 'src/app/service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  oauth2: Oauth2 = new Oauth2
  userLogin: UserLogin = new UserLogin
  token: string
  loggedPass: string
  
  loginForm: FormGroup = new FormGroup({
    email : new FormControl('username', [Validators.required]),
    password : new FormControl('pass', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
  })

  constructor(private authService: AuthService) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  login(){
    const userToSave: UserLogin = this.userLogin
    this.authService.getUserLogged(userToSave.username)
      .subscribe({
        next: (resp) => {
          if (resp != null){
            console.log("User found, has logged")
            this.loggedPass = this.userLogin.password
            this.userLogin = resp
            this.authService.
              tokenOauth2(this.userLogin.username, this.loggedPass)
                .subscribe({
                  next: (resp) => {
                    let strJson = JSON.stringify(resp)
                    let json = JSON.parse(strJson)
                    this.token = json.access_token
                    this.userLogin.token = this.token
                    console.log(this.userLogin.token)
                    console.log("Save this")
                    console.log(userToSave)
                    userToSave.token = this.token
                    console.log("Save this with token")
                    console.log(userToSave)
                    this.authService
                      .updateUserLogged(this.userLogin.id, userToSave)
                        .subscribe({
                          next: (resp) => {
                            console.log(resp)
                            this.userLogin = new UserLogin
                          }
                        })
                  }
                })
          } else {
            console.log("User found, never logged")
            this.authService.
              tokenOauth2(this.userLogin.username, this.userLogin.password)
                .subscribe({
                  next: (resp) => {
                    let strJson = JSON.stringify(resp)
                    let json = JSON.parse(strJson)
                    this.token = json.access_token
                    this.userLogin.token = this.token
                    console.log(this.userLogin.token)
                    console.log(this.userLogin)
                    console.log(userToSave)
                    console.log(userToSave.permissions)
                    this.authService
                      .salvarLogin(this.userLogin)
                        .subscribe({
                          next: (resp) => {
                            console.log(resp)
                            this.userLogin = new UserLogin
                          }
                        })
                  }
                })
          }
        }
      })
  }
}
