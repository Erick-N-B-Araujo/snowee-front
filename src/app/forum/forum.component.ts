import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Article } from '../model/Article';
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
  listArticleThemes: Theme[] = []

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
    this.getAllThemes()
    this.getAllArticles()
    this.getAllUserArticles()
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
      alert("Artigo publicado com sucesso!")
      this.article = new Article
      this.getAllArticles()
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
      console.log(resp)
      this.listUserArticles = resp.articles
      console.log(resp.articles)
    })
  }
}
