import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['../../css/app.component.scss']
})
export class SideNavComponent {

  constructor(
    public auth: AuthService
  ){}
}
