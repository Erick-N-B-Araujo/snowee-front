import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagedObj } from 'src/app/model/PagedObj';
import { Theme } from 'src/app/model/Theme';
import { ThemeService } from 'src/app/service/theme.service';

@Component({
  selector: 'themes',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  theme: Theme = new Theme
  themeList: Theme[]
  totalPages: number
  pages: Array<number> = []
  page: number = 0

  constructor(
    private router: Router,
    private themeService: ThemeService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    this.firstLoadAllThemes()
  }

  setPage(i: number, event: any){
    event.preventDefault()
    this.page = i
    this.refreshThemes()
    //this.findAllThemes()
  }

  setPages(totalPages: number){
    for (let i = 0; i < totalPages; i++) {
      this.pages.push(i)
      console.log("Pagina: "+i)
    }
  }

  refreshThemes(){
    this.themeService
    .getAllThemes(this.page)
    .subscribe((resp: PagedObj) => {
      this.themeList = resp.content
    })
  }

  firstLoadAllThemes(){
    this.themeService
    .getAllThemes(this.page)
    .subscribe((resp: PagedObj) => {
      console.log(resp)
      this.totalPages = resp.totalPages
      this.themeList = resp.content
      this.setPages(resp.totalPages)
    })
  }

  save(){
    this.themeService
    .postTheme(this.theme)
    .subscribe((resp: Theme) => {
      console.log(resp)
      this.theme = resp
      alert("Tema cadastrado com sucesso!")
      this.theme = new Theme
      this.refreshThemes()
    })
  }
}
