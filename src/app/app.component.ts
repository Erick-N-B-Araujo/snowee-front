import { Component, OnInit } from '@angular/core'
import { PrimeNGConfig } from 'primeng/api';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(
    private primengConfig: PrimeNGConfig,
    public auth: AuthService
    ){
  }

  ngOnInit(){
    this.primengConfig.ripple = true;
  }

}
