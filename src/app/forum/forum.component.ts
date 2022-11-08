import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from '../model/Article';
import { Theme } from '../model/Theme';
import { User } from '../model/User';
import { ArticleService } from '../service/article.service';
import { AuthService } from '../service/auth.service';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  user: User = new User
  article: Article = new Article
  theme: Theme = new Theme

  listThemes: Theme[] = []
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
    this.getAllThemes()
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

  getAllThemes(){
    this.themeService
    .getAllList()
    .subscribe((resp: Theme[]) => {
      this.listThemes = resp
    })
  }

  publish(){
    this.article.themes = this.listArticleThemes

    
    this.articleService
    .postArticle(this.article)
    .subscribe((resp: Article) => {
      console.log(resp)
      alert("Artigo publicado com sucesso!")
      this.article = new Article
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
}
