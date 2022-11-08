import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from '../model/Article';
import { ArticleService } from '../service/article.service';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  article: Article = new Article
  constructor(
    private router: Router,
    private articleService: ArticleService,
    private themeService: ThemeService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

  getAllThemes(){
  
  }
}
