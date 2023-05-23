import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public name: string="";
  constructor(
    public auth: AuthService,
    private router: Router
  ){}

  ngOnInit() {
    if (this.auth.isLogged()){
      this.setUserName()
    }
  }

  setUserName(){
    console.log("User logged: " + environment.firstName)
    this.name = environment.firstName
  }

  loggout(){
    environment.isLogged = false
    environment.token = ''
    this.router.navigate(['/auth/login'])
    alert("User logged out!")
  }

}
