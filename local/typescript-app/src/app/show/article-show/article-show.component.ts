import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/model/Article';
import { UserLogin } from 'src/app/model/UserLogin';
import { ArticleService } from 'src/app/service/article.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-article-show',
  templateUrl: './article-show.component.html',
  styleUrls: ['./article-show.component.css']
})
export class ArticleShowComponent implements OnInit {

  article: Article = new Article
  userArticle: UserLogin = new UserLogin
  articleName: string
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id']
    this.findByIdArticle(id)
  }

  findByIdArticle(id: number){
    this.articleService.getById(id)
    .subscribe((resp: Article) => {
      this.userArticle = resp.user
      this.article = resp
      this.articleName = resp.title
    })
  }
}
