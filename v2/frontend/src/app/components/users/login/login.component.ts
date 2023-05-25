import { Component, OnInit } from '@angular/core';
import { Oauth2 } from 'src/app/model/Oauth2';
import { UserLogin } from 'src/app/model/UserLogin';
import { AuthService } from 'src/app/service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AlertsService } from 'src/app/service/alerts.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../css/app.component.scss']
})
export class LoginComponent implements OnInit {

  oauth2: Oauth2 = new Oauth2
  userLogin: UserLogin = new UserLogin
  token: string=""
  loggedPass: string=""
  idLogged: number=0
  username: string=""
  
  loginForm: FormGroup = new FormGroup({
    email : new FormControl('username', [Validators.required]),
    password : new FormControl('password', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
  })

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private alerts: AlertsService
    ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  login(){

    const userToLogin: UserLogin = this.userLogin
    
    this.authService.
        tokenOauth2(userToLogin.username,userToLogin.password)
            .subscribe( (resp) => {
              let strJson = JSON.stringify(resp)
              let json = JSON.parse(strJson)
              
              //Setting user to login with token
              environment.token = json.access_token
              this.token = json.access_token
              userToLogin.token = json.access_token
              if (json.scope == "read write"){
                environment.isAdmin=true
              }
              console.log("token id: "+json.userId)
              environment.id = json.userId

              this.authService
                  .getInfoFromUser(userToLogin)
                    .subscribe( userLogged => {
                      if (userLogged == null){
                        console.log("User not found!")
                        this.router.navigate(['/users/signin'])
                        this.alerts.showAlertDanger("User not found! Sign-in first")
                      } else {
                        environment.firstName = userLogged.firstname
                        environment.lastName = userLogged.lastname
                        environment.username = userLogged.username
                        environment.profileImg = userLogged.profileImg
                        environment.isLogged = true
                        this.authService.sendClickEvent();
                        this.router.navigate(['/home'])
                        this.alerts.showAlertSuccess("User Logged-in!")
                      }
                    })
          })
  }
}
