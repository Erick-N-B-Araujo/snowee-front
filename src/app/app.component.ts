import { Component, OnInit } from '@angular/core'
import { PrimeNGConfig } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  logged: boolean = environment.isLogged

  constructor(
    private primengConfig: PrimeNGConfig,
    public auth: AuthService
    ){
  }

  ngOnInit(){
    this.primengConfig.ripple = true;
  }
}
