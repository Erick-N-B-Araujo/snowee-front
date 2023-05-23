import { Component, OnInit  } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['../../css/app.component.scss']
})

export class TopNavComponent implements OnInit {

  public cont=0;
  public name: string=environment.firstName;
  public profileImg: string=environment.profileImg;
  constructor(
    public auth: AuthService
  ){}
  
  ngOnInit() {
    window.scroll(0,0)
  }

  setUserName(){
    if (this.cont==0) {
      console.log("User logged: " + environment.firstName)
      this.name = environment.firstName
      this.profileImg = environment.profileImg
      this.cont = this.cont + 1
    }    
  }
}
