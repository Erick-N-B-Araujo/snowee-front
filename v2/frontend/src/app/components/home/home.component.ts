import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['../../css/app.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    environment.isHomeActive=true
  }

  goToForum(){
    this.router.navigate(["/forum"])
    environment.isHomeActive=false
  }

  goToPortfolio(){
    this.router.navigate(["/portfolio"])
    environment.isHomeActive=false
  }

  goToSobre(){
    this.router.navigate(["/sobre"])
    environment.isHomeActive=false
  }
}
