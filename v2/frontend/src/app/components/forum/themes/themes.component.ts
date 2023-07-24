import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Theme } from 'src/app/model/Theme';
import { AlertsService } from 'src/app/service/alerts.service';
import { AuthService } from 'src/app/service/auth.service';
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
  themesFounded: Theme[] = [];
  themeToEdit: Theme = new Theme();
  themeToInsert: Theme = new Theme();
  hideDefaultTheme: boolean = true;
  margin_fill: string = "vh-513";
  themeForm:FormGroup;
  themeNameForm:FormGroup;
  editThemeForm:FormGroup;
  findThemeForm:FormGroup;
  themeName: string;

  constructor(
    private alerts: AlertsService,
    private themeService: ThemesService,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.listAllThemes();
    this.themeNameForm = this.formBuilder.group({
      name: String
    });
    this.editThemeForm = this.formBuilder.group({
      name: String
    });
    this.findThemeForm = this.formBuilder.group({
      name: String
    });
    this.themeForm = this.formBuilder.group({
      name: String
    });
    if (!this.auth.isAdmin()){
      this.alerts.showAlertDanger("Somente administradores tem acesso a este recurso!")
      this.router.navigate(["/inicio"])
    }
  }

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
            this.alerts.showAlertSuccess("Tema cadastrado com sucesso!");
            this.themeToInsert = new Theme();
            this.listAllThemes();
          }else{
            this.alerts.showAlertDanger("Tema não cadastrado!")
          }
        }
      )
  }

  findThemes(){
    this.themeService
      .getThemesByName(this.themeName)
      .subscribe(
        respThemes => {
          if ( respThemes != null){
            this.themesFounded = respThemes;
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
    this.themeService
      .updateTheme(themeEdited)
      .subscribe(
        respTheme => {
          this.listAllThemes();
        }
      )
  }

  deleteTheme(id: number){
    this.themeService
      .deleteTheme(id)
      .subscribe(
        respTheme => {
          setTimeout(() => { 
            this.listAllThemes();
           }, 100);
        }
      )
  }
}
