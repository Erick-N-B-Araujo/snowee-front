import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./css/app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Snowee Gamecorp';

  public name: string="";
  public profileImg: string="";
  constructor(
    public auth: AuthService,
  ){}

  ngOnInit() {
  }

  setUserName(){
    console.log("User logged: " + environment.firstName)
    this.name = environment.firstName
    console.log(environment.firstName)
    this.profileImg = environment.profileImg
    console.log(environment.profileImg)
  }
}
