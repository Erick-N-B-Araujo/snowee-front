import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Article } from 'src/app/model/Article';
import { Theme } from 'src/app/model/Theme';
import { AlertsService } from 'src/app/service/alerts.service';
import { ArticlesService } from 'src/app/service/articles.service';
import { ThemesService } from 'src/app/service/themes.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'articles',
  templateUrl: './articles.component.html',
  styleUrls: ['../../../css/app.component.scss']
})
export class ArticlesComponent implements OnInit {

  articleList: Article[]=[];
  articleToFind: Article = new Article();
  articleFounded: Article = new Article();
  articleToEdit: Article = new Article();
  articleToInsert: Article = new Article();
  theme: Theme = new Theme();
  themeSelected: Theme = null;
  idTheme: number
  //listArticleThemes: Theme[]=[];
  themeList: Theme[]=[];
  themeToFind: Theme = new Theme();
  themeFounded: Theme = new Theme();
  themeToEdit: Theme = new Theme();
  themeToInsert: Theme = new Theme();
  hideDefaultTheme: boolean = true;
  margin_fill: string = "find";

  instructions: string[][] = [];
  steps: string[] = [];
  codes: string[] = [];

  articlesForm: FormGroup;
  insertArticleForm: FormGroup;
  articleThemes:FormGroup;
  contactForm:FormGroup;
 
  countries = [
    { id: 1, name: "United States" },
    { id: 2, name: "Australia" },
    { id: 3, name: "Canada" },
    { id: 4, name: "Brazil" },
    { id: 5, name: "England" }
  ];

  listArticleThemes: Theme[]=[];

  constructor(
    private alerts: AlertsService,
    private themeService: ThemesService,
    private articleService: ArticlesService,
    private renderer: Renderer2,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.articleToInsert.title = "Python: Calculadora doida frenetica";
    this.articleToInsert.subTitle = "Aprenda como criar uma calculadora simples em python";
    this.articleToInsert.description = "Este passo a passo esplanatorio se deu em meio ao desenrolar de um curso de python que comprei recentemente. Vamos as instruções: ";
    this.articleToInsert.instructionList = this.steps;
    this.articleToInsert.codeList = this.codes;
    this.articleToInsert.ending = "Se você seguiu os passos a risca, agora deve ter uma calculadora simples e funcional.";
    this.articleToInsert.imgUrl = "https://i.imgur.com/1sY3f85.png";
    this.articleToInsert.themes = this.listArticleThemes;
    this.articleToInsert.user.id = environment.id;
    this.articleToInsert.step = "1- Testes ssss";
    this.articleToInsert.code = "python install tttt";
    window.scroll(0,0);
    this.listAllThemes();
    this.listAllArticles();
    this.insertArticleForm = this.formBuilder.group({
      title: String,
      subtitle: String,
      description: String,
      ending: String,
      imgUrl: String,
      step: String,
      code: String,
      theme: [null]
    });
    this.articlesForm = this.formBuilder.group({
      theme: [null]
    });
  }

  submit() {
    let add = this.articlesForm.value;
    console.log(this.articlesForm.value)
    if(this.listArticleThemes.some(e => e.name === add.theme.name)){
      this.alerts.showAlertInfo("Tema já adicionado")
    }else{
      this.listArticleThemes.push(add.theme)
      console.log(this.listArticleThemes);
    }
  }

  addTheme(themeToAdd: Theme){
    if(this.listArticleThemes.some(theme => theme === themeToAdd)){
      this.alerts.showAlertInfo("Tema já adicionado!");
    }else{
      this.listArticleThemes.push(themeToAdd);
      this.alerts.showAlertSuccess("Tema adicionado!");
    }
  }

  removeTheme(themeToRemove: Theme) {
    if(this.listArticleThemes.some(theme => theme === themeToRemove)){
      this.listArticleThemes = this.listArticleThemes.filter(theme => theme != themeToRemove);
      this.alerts.showAlertSuccess("Tema removido!");
    } else {
      this.alerts.showAlertInfo("Tema já removido!");
    }
  }

  addInstructions(step: string, code: string){
    this.steps.push(step);
    this.codes.push(code);
    console.log(this.steps);
    console.log(this.codes);
  }

  removeInstruction(stepToRemove: string, codeToRemove: string){
    for(let i=0; i < this.steps.length; i++){
      if(this.steps[i] == stepToRemove && this.codes[i] == codeToRemove){
        this.steps = this.steps.filter(step => step != stepToRemove);
        this.codes = this.codes.filter(code => code != codeToRemove);
        this.alerts.showAlertSuccess("Instrução removida!"); 
      }
    }
  }

  insertArticle(){
    if (this.articleToInsert.themes.length == 0){
      this.alerts.showAlertWarning("Adicione ao menos um tema!"); 
    } else if (this.articleToInsert.instructionList.length == 0 && this.articleToInsert.instructionList.length == 0){
      this.alerts.showAlertWarning("Adicione ao menos uma instrução!"); 
    } else {
      this.articleService
      .insertArticle(this.articleToInsert)
        .subscribe(
          articleResp => {
            console.log(articleResp);
            this.listAllArticles();
            this.alerts.showAlertSuccess("Artigo inserido com sucesso!"); 
          }
        );
    }
  }

  //Manipulador de formularios para validar campos
  themeForm: FormGroup = new FormGroup({
    name : new FormControl('Nome do tema', [Validators.required])
  })

  /*articleForm: FormGroup = new FormGroup({
    title : new FormControl('Titulo', [Validators.required]),
    subtitle : new FormControl('Subtitulo', [Validators.required]),
    description: new FormControl('Descrição', [Validators.required]),
    instructionList: new FormControl('Lista de instruções', [Validators.required]),
    codeList: new FormControl('Lista de codigos', [Validators.required]),
    ending: new FormControl('Conclusão', [Validators.required]),
    imgUrl: new FormControl('Imagem de Banner', [Validators.required]),
  })*/

  listAllThemes(){
    this.themeService
      .getAllThemes()
        .subscribe(
          themeList => {
            this.themeList = themeList;
            console.log(this.themeList)
          }
        )
  }

  findByIdTheme(){
    this.themeService
    .getThemeById(this.idTheme)
      .subscribe((resp: Theme) => {
        this.theme = resp
      })
  }

  setFocus(){
    let inputTitle = this.renderer.selectRootElement('#title');
    inputTitle.click();
  }

  listAllArticles(){
    this.articleService
      .getAllArticles()
        .subscribe(
          articleList => {
            articleList.forEach(article => {
              let addArticle = new Article();
              addArticle = article
              this.articleList.push(addArticle);
            });
            //this.articleList = articleList;
            console.log(this.articleList)
          }
        )
  }

  setEditArticle(articleToEdit: Article){

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
            this.margin_fill="found"
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
