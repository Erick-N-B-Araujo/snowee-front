import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'sobre',
  templateUrl: './about.component.html',
  styleUrls: ['../../css/app.component.scss']
})
export class AboutComponent {
  ngOnInit(){
    window.scroll(0,0)
    environment.isAboutActive = true
  }
}
