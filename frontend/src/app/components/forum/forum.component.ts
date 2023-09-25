import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { timeInterval } from 'rxjs';
import { Article } from 'src/app/model/Article';
import { Theme } from 'src/app/model/Theme';
import { AlertsService } from 'src/app/service/alerts.service';
import { ArticlesService } from 'src/app/service/articles.service';
import { AuthService } from 'src/app/service/auth.service';
import { ThemesService } from 'src/app/service/themes.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'forum',
  templateUrl: './forum.component.html',
  styleUrls: ['../../css/app.component.scss']
})

export class ForumComponent implements OnInit {
  
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
  isThemeArticleSelected: boolean = false;
  
  themeList: Theme[]=[];
  
  hideDefaultArticle: boolean = true;
  margin_fill: string = "vh-513";

  instructions: string[][] = [];
  steps: string[] = [];
  codes: string[] = [];

  articleTitleForm:FormGroup;

  themeShowing: string = "";
  themeArticleList: Article[]=[];
  pagedArticleList: Article[]=[];

  totalPages: number
  pages: Array<number> = []
  page: number = 0

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
    environment.isForumActive = true
    this.initializeForms();
    //this.listAllArticles();
    this.setForumPages();
  }

  ngAfterViewInit() {
    this.listAllThemes();
    setTimeout(() => { 
      //this.listAllArticles();
     }, 500);
  }

  initializeForms(){
    this.articleTitleForm = this.formBuilder.group({
      title: String
    });
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
            //console.log(this.themeList);
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

  showArticle(id: number){
    let showRoute = `/forum/artigos/show/${id}`;
    this.router.navigate([showRoute])
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

  setPage(i: number, event: any){
    event.preventDefault()
    this.page = i
    this.pagedArticleList = [];
    this.setForumPages()
  }

  nextPage(){
    let i = this.pages.length
    i--
    if(this.page < i){
      this.page+=1
      this.pagedArticleList = [];
      this.setForumPages()
    }
    else if(this.page == i){
      this.alerts.showAlertInfo("Está é a ultima pagina!")
    } else {
      this.alerts.showAlertDanger("Não existem posts nesta pagina!")
    }
  }

  prevPage(){
    let i = this.page
    if(i == 0){
      this.alerts.showAlertInfo("Está é a primeira pagina!")
      this.pagedArticleList = [];
      this.setForumPages()
    }else if(i < this.pages.length){
      this.page-=1
      this.pagedArticleList = [];
      this.setForumPages()
    } else {
      this.alerts.showAlertDanger("Não existem posts nesta pagina!")
    }
  }

  setPages(totalPages: number){
    if (totalPages != this.pages.length){
      for (let i = 0; i < totalPages; i++) {
        this.pages.push(i)
      }
    }
  }

  setForumPages(){
    this.articleService
      .getAllArticlesPaged(this.page)
        .subscribe(
          pagedArticles => {
            pagedArticles.content.forEach(article => {
              this.pagedArticleList.push(article);
            });
            this.setPages(pagedArticles.totalPages);
          }
        );
  }

  setThemeArticles(theme: Theme){
    if (theme.name == this.themeShowing){
      this.themeShowing = "";
    } else if (theme.articles.length == 0){
      this.themeShowing = "";
    } else {
      this.themeArticleList = [];
      this.themeArticleList = theme.articles;
      this.themeShowing = theme.name;
    }
  }
}