import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Theme } from 'src/app/model/Theme';
import { AlertsService } from 'src/app/service/alerts.service';
import { ThemesService } from 'src/app/service/themes.service';


@Component({
  selector: 'themes',
  templateUrl: './themes.component.html',
  styleUrls: ['../../../css/app.component.scss']
})
export class ThemesComponent implements OnInit{

  themeList: Theme[] = [];
  themeToFind: Theme = new Theme();
  themeFounded: Theme = new Theme();
  themeToEdit: Theme = new Theme();
  themeToInsert: Theme = new Theme();
  hideDefaultTheme: boolean = true;

  constructor(
    private alerts: AlertsService,
    private themeService: ThemesService,
    private renderer: Renderer2
    ) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.listAllThemes();
  }

  //Manipulador de formularios para validar campos
  themeForm: FormGroup = new FormGroup({
    name : new FormControl('Nome do tema', [Validators.required])
  })

  listAllThemes(){
    this.themeService.getAllThemes().subscribe(
      themeList => {
        this.themeList = themeList;
      }
    )
  }

  insertTheme(){
    this.themeService
      .insertTheme(this.themeToInsert)
      .subscribe(
        respTheme => {
          if ( respTheme != null && respTheme.id != null){
            console.log(respTheme);
            this.alerts.showAlertSuccess("Tema cadastrado com sucesso!");
            this.listAllThemes();
          }else{
            this.alerts.showAlertDanger("Tema não cadastrado!")
          }
        }
      )
  }

  findTheme(){
    this.themeService
      .getThemeByName(this.themeToFind.name)
      .subscribe(
        respTheme => {
          if ( respTheme != null && respTheme.id != null){
            this.themeFounded.id = respTheme.id;
            this.themeFounded.name = respTheme.name;
            this.themeFounded.articles = respTheme.articles;
            this.hideDefaultTheme=false;
          }else{
            this.alerts.showAlertDanger("Tema não encontrado!")
          }
        }
      )
  }

  setEditTheme(themeToEdit: Theme){
    this.themeToEdit = themeToEdit
  }

  updateEditedTheme(themeEdited: Theme){
    let editThemeModal = this.renderer.selectRootElement('#close-modals');
    this.themeService
      .updateTheme(themeEdited)
      .subscribe(
        respTheme => {
          console.log(respTheme)
          this.listAllThemes();
          //editThemeModal.click();
        }
      )
  }

  deleteTheme(id: number){
    this.themeService
      .deleteTheme(id)
      .subscribe(
        respTheme => {
          console.log(respTheme)
          this.listAllThemes();
        }
      )
  }
}
