import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Theme } from 'src/app/model/Theme';
import { AlertsService } from 'src/app/service/alerts.service';
import { ThemeService } from 'src/app/service/theme.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'delete-theme',
  templateUrl: './delete-theme.component.html',
  styleUrls: ['./delete-theme.component.css']
})
export class DeleteThemeComponent implements OnInit {

  theme: Theme = new Theme

  constructor(
    private themeService: ThemeService,
    private router: Router,
    private route: ActivatedRoute,
    private alerts: AlertsService
  ) { }

  ngOnInit(){
    if(environment.token == ''){
      this.alerts.showAlertInfo("Token expired, login to generate another")
      this.router.navigate(['/auth/login'])
    }
    let id = this.route.snapshot.params['id']
    this.findByIdTheme(id)
  }

  findByIdTheme(id: number){
    this.themeService.getById(id)
    .subscribe((resp: Theme) => {
      this.theme = resp
    })
  }

  delete(){
    this.themeService.deleteTheme(this.theme.id)
    .subscribe((resp) =>{
      this.alerts.showAlertSuccess("Tema deletado com sucesso!")
      this.router.navigate(['/forum/themes'])
    })
  }
}
