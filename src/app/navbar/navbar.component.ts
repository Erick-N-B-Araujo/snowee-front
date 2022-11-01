import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public name: string //= "Eriwck" //environment.firstName

  constructor(
    public auth: AuthService
  ){}

  ngOnInit() {
    if (this.auth.isLogged()){
      this.setUserName()
    }
  }

  setUserName(){
    this.name = environment.firstName
  }

}
