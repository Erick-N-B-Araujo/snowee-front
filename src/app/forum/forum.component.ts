import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Article } from '../model/Article';
import { PagedObj } from '../model/PagedObj';
import { Theme } from '../model/Theme';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';
import { ArticleService } from '../service/article.service';
import { AuthService } from '../service/auth.service';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  user: UserLogin = new UserLogin
  
  article: Article = new Article
  theme: Theme = new Theme
  listThemes: Theme[] = []
  listArticles: Article[] = []
  listUserArticles: Article[] = []
  listThemeArticles: Article[] = []
  listArticleThemes: Theme[] = []
  totalPages: number
  pages: Array<number> = []
  page: number = 0

  idTheme: number

  /*articleGroup: FormGroup = new FormGroup({
    title : new FormControl('title', [Validators.required]),
    imgUrl : new FormControl('imgUrl', [Validators.required]),
    articleText : new FormControl('articleText', [Validators.required]),
    theme : new FormControl('theme', [Validators.required]),
  })*/

  constructor(
    private router: Router,
    private articleService: ArticleService,
    private themeService: ThemeService,
    public auth: AuthService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    this.setUser()
    this.firstLoadAllArticles()
    this.getAllThemes()
    if(environment.token != ''){
      this.getAllUserArticles()
    }
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

  setUser(){
    this.user.id = environment.id
    this.user.firstname = environment.firstName
    this.user.lastname = environment.lastName
    this.user.username = environment.username
    //console.log(this.user)
  }

  getAllThemes(){
    this.themeService
    .getAllList()
    .subscribe((resp: Theme[]) => {
      this.listThemes = resp
    })
  }

  getAllArticles(){
    this.articleService
      .getAllList()
      .subscribe((resp: Article[]) => {
        this.listArticles = resp
      })
  }

  publish(){
    this.article.themes = this.listArticleThemes
    this.article.user = this.user
    this.articleService
    .postArticle(this.article)
    .subscribe((resp: Article) => {
      console.log(resp)
      alert("Artigo publicado com sucesso!")
      this.article = new Article
      this.listArticleThemes = []
      this.getAllArticles()
      this.getAllThemes()
      this.getAllUserArticles()
    })
  }

  addTheme(){
    if(this.listArticleThemes.some(e => e.name === this.theme.name)){
      alert("Tema já adicionado")
    }else{
      this.listArticleThemes.push(this.theme)
    }
  }

  findByIdTheme(){
    this.themeService
    .getById(this.idTheme)
    .subscribe((resp: Theme) => {
      this.theme = resp
    })
  }

  getAllUserArticles(){
    this.auth
    .getUserLogged(this.user.username)
    .subscribe((resp: UserLogin) =>{
      this.listUserArticles = resp.articles
    })
  }

  getAllThemeArticle(){

  }

  setPage(i: number, event: any){
    event.preventDefault()
    this.page = i
    this.refreshArticles()
  }

  nextPage(){
    let i = this.pages.length
    i--
    if(this.page < i){
      this.page+=1
      this.refreshArticles()
    }
    else if(this.page == i){
      alert("Está é a ultima pagina!")
    } else {
      alert("Não existem posts nesta pagina!")
    }
  }

  prevPage(){
    let i = this.page
    if(i == 0){
      alert("Está é a primeira pagina!")
      this.refreshArticles()
    }else if(i < this.pages.length){
      this.page-=1
      this.refreshArticles()
    } else {
      alert("Não existem posts nesta pagina!")
    }
  }

  setPages(totalPages: number){
    for (let i = 0; i < totalPages; i++) {
      this.pages.push(i)
    }
  }

  refreshArticles(){
    this.articleService
    .getAllArticles(this.page)
    .subscribe((resp: PagedObj) => {
      this.listArticles = resp.content
      if(this.totalPages != resp.totalPages){
        this.totalPages = resp.totalPages
        this.setPages(resp.totalPages)
      }
    })
  }

  firstLoadAllArticles(){
    this.articleService
    .getAllArticles(this.page)
    .subscribe((resp: PagedObj) => {
      this.totalPages = resp.totalPages
      this.listArticles = resp.content
      this.setPages(resp.totalPages)
    })
  }
}
