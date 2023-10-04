import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from 'src/app/model/Article';
import { Theme } from 'src/app/model/Theme';
import { AlertsService } from 'src/app/service/alerts.service';
import { ArticlesService } from 'src/app/service/articles.service';
import { AuthService } from 'src/app/service/auth.service';
import { ThemesService } from 'src/app/service/themes.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'articles',
  templateUrl: './articles.component.html',
  styleUrls: ['../../../css/app.component.scss']
})
export class ArticlesComponent implements OnInit {

  articleTitle: string;
  articleList: Article[]=[];
  userArticleList: Article[]=[];
  foundArticleList: Article[]=[];
  listArticleThemes: Theme[]=[];
  articleToFind: Article = new Article();
  articleFounded: Article = new Article();
  articleToEdit: Article = new Article();
  articleToInsert: Article = new Article();
  theme: Theme = new Theme();
  themeSelected: Theme = null;
  
  themeList: Theme[]=[];
  
  hideDefaultArticle: boolean = true;
  margin_fill: string = "vh-513";

  instructions: string[][] = [];
  steps: string[] = [];
  codes: string[] = [];

  insertArticleForm: FormGroup;
  editArticleForm: FormGroup;
  articleThemes:FormGroup;
  articleTitleForm:FormGroup;

  constructor(
    private alerts: AlertsService,
    private themeService: ThemesService,
    private articleService: ArticlesService,
    private formBuilder: FormBuilder,
    private router: Router,
    public auth: AuthService
    ) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.listAllThemes();
    this.listAllArticles();
    this.listUserArticles();
    this.initializeVariables();
    this.initializeForms();
    if (!this.auth.isAdmin()){
      this.alerts.showAlertDanger("Somente administradores tem acesso a este recurso!")
      this.router.navigate(["/inicio"])
    }
  }

  initializeForms(){
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
    this.editArticleForm = this.formBuilder.group({
      title: String,
      subtitle: String,
      description: String,
      ending: String,
      imgUrl: String,
      step: String,
      code: String,
      theme: [null]
    });
    this.articleTitleForm = this.formBuilder.group({
      title: String
    });
  }

  initializeVariables(){
    this.articleToInsert.title = "Python: Calculadora doida frenetica";
    this.articleToInsert.subTitle = "Aprenda como criar uma calculadora simples em python";
    this.articleToInsert.description = "Este passo a passo esplanatorio se deu em meio ao desenrolar de um curso de python que comprei recentemente. Vamos as instruções: ";
    this.articleToInsert.instructionList = this.steps;
    this.articleToInsert.codeList = this.codes;
    this.articleToInsert.ending = "Se você seguiu os passos a risca, agora deve ter uma calculadora simples e funcional.";
    this.articleToInsert.imgUrl = "https://i.imgur.com/1sY3f85.png";
    this.articleToInsert.themes = this.listArticleThemes;
    this.articleToInsert.user.id = environment.id;
    this.articleToEdit.user.id = environment.id;
    this.articleToInsert.step = "1- Testes ssss";
    this.articleToInsert.code = "python install tttt";
  }

  addTheme(themeToAdd: Theme, typeId: number){
    switch(typeId){
      case 0:{
        //Inserting
        if(this.listArticleThemes.some(theme => theme === themeToAdd)){
          this.alerts.showAlertInfo("Tema já adicionado!");
        }else{
          this.listArticleThemes.push(themeToAdd);
        }
      } break;
      case 1:{
        //Editing
        if(this.articleToEdit.themes.some(theme => theme.name === themeToAdd.name)){
          this.alerts.showAlertInfo("Tema já adicionado!");
        }else{
          this.articleToEdit.themes.push(themeToAdd);
        }
      } break;
    }
  }

  removeTheme(themeToRemove: Theme, typeId: number) {
    switch(typeId){
      case 0:{
        //Inserting
        if(this.listArticleThemes.some(theme => theme === themeToRemove)){
          this.listArticleThemes = this.listArticleThemes.filter(theme => theme != themeToRemove);
          this.alerts.showAlertSuccess("Tema removido!");
        } else {
          this.alerts.showAlertInfo("Tema já removido!");
        }
      } break;
      case 1:{
        //Editing
        if(this.articleToEdit.themes.some(theme => theme.name === themeToRemove.name)){
          this.articleToEdit.themes = this.articleToEdit.themes.filter(theme => theme.name != themeToRemove.name);
          this.alerts.showAlertSuccess("Tema removido!");
        } else {
          this.alerts.showAlertInfo("Tema já removido!");
        }
      } break;
    }
  }

  addInstructions(step: string, code: string, typeId: number){
    switch(typeId){
      case 0:{
        //Inserting
        this.steps.push(step);
        this.codes.push(code);
      } break;
      case 1:{
        //Editing
        this.articleToEdit.instructionList.push(step);
        this.articleToEdit.codeList.push(code);
      } break;
    }
  }

  removeInstruction(stepToRemove: string, codeToRemove: string, typeId: number){
    switch(typeId){
      case 0:{
        //Inserting
        for(let i=0; i < this.steps.length; i++){
          if(this.steps[i] == stepToRemove && this.codes[i] == codeToRemove){
            this.steps = this.steps.filter(step => step != stepToRemove);
            this.codes = this.codes.filter(code => code != codeToRemove);
            this.alerts.showAlertSuccess("Instrução removida!"); 
          }
        }
      } break;
      case 1:{
        //Editing
        for(let i=0; i < this.articleToEdit.instructionList.length; i++){
          if(this.articleToEdit.instructionList[i] == stepToRemove && this.articleToEdit.codeList[i] == codeToRemove){
            this.articleToEdit.instructionList = this.articleToEdit.instructionList.filter(step => step != stepToRemove);
            this.articleToEdit.codeList = this.articleToEdit.codeList.filter(code => code != codeToRemove);
            this.alerts.showAlertSuccess("Instrução removida!"); 
          }
        }
      } break;
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
          respArticle => {
            this.listAllArticles();
            this.alerts.showAlertSuccess("Artigo inserido com sucesso!"); 
          }
        );
    }
  }

  setArticleToEdit(articleToEdit: Article){
    this.articleToEdit = articleToEdit;
  }

  editArticle(){
    let articleEdited: Article = new Article();
    if (this.articleToEdit.themes.length == 0){
      this.alerts.showAlertWarning("Adicione ao menos um tema!"); 
    } else if (this.articleToEdit.instructionList.length == 0 && this.articleToEdit.codeList.length == 0){
      this.alerts.showAlertWarning("Adicione ao menos uma instrução!"); 
    } else if(this.articleToEdit.user.id == environment.id){
      articleEdited = this.editArticleForm.value;
      articleEdited.id = this.articleToEdit.id;
      articleEdited.title = this.articleToEdit.title;
      articleEdited.subTitle = this.articleToEdit.subTitle;
      articleEdited.description = this.articleToEdit.description;
      articleEdited.descriptionText = this.articleToEdit.descriptionText;
      articleEdited.themes = this.articleToEdit.themes;
      articleEdited.instructionList = this.articleToEdit.instructionList;
      articleEdited.codeList = this.articleToEdit.codeList;
      articleEdited.user = this.articleToEdit.user;
      this.articleService
      .editArticle(articleEdited)
        .subscribe(
          respArticle => {
            this.articleList = [];
            this.listAllArticles();
            this.alerts.showAlertSuccess("Artigo atualizado com sucesso!"); 
          }
        );
    } else {
      this.alerts.showAlertWarning("Você não pode editar o artigo de outra pessoa! "); 
    }
  }

  findArticle(){
    if (this.articleTitle == ""){
      this.margin_fill="vh-513";
    } else {
      this.articleService
      .findByTitleLike(this.articleTitle)
        .subscribe(
          respArticles => {
            if (this.articleTitle == ""){
              this.foundArticleList = [];
            } else {
              this.foundArticleList = respArticles;
              this.margin_fill=""
            }
          }
        );
    }
  }

  listAllThemes(){
    this.themeService
      .getAllThemes()
        .subscribe(
          themeList => {
            this.themeList = themeList;
          }
        )
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
          }
        )
  }

  listUserArticles(){
    setTimeout(() => { 
      this.articleList.forEach(article => {
        if(article.user.id == environment.id){
          let addArticle = new Article();
          addArticle = article
          this.userArticleList.push(addArticle);
        }
      });
     }, 500);
  }

  showArticle(id: number){
    let showRoute = `/forum/artigos/show/${id}`;
    this.router.navigate([showRoute])
  }
}
