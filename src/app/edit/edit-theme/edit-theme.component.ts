import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Theme } from 'src/app/model/Theme';
import { ThemeService } from 'src/app/service/theme.service';

@Component({
  selector: 'edit-theme',
  templateUrl: './edit-theme.component.html',
  styleUrls: ['./edit-theme.component.css']
})
export class EditThemeComponent implements OnInit {

  theme: Theme = new Theme

  constructor(
    private themeService: ThemeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    let id = this.route.snapshot.params['id']
    this.findByIdTheme(id)
  }

  findByIdTheme(id: number){
    this.themeService.getById(id)
    .subscribe((resp: Theme) => {
      this.theme = resp
    })
  }

  update(){
    this.themeService.putTheme(this.theme)
    .subscribe((resp: Theme) =>{
      this.theme = resp
      alert("Tema atualizado com sucesso!")
      this.router.navigate(['/forum/themes'])
    })
  }
}
