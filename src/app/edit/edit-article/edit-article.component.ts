import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/model/Article';
import { UserLogin } from 'src/app/model/UserLogin';
import { AlertsService } from 'src/app/service/alerts.service';
import { ArticleService } from 'src/app/service/article.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  article: Article = new Article
  userArticle: UserLogin = new UserLogin
  articleName: string


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private alerts: AlertsService
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      this.alerts.showAlertInfo("Token expired, login to generate another")
      this.router.navigate(['/auth/login'])
    }
    let id = this.route.snapshot.params['id']
    this.findByIdArticle(id)
  }

  findByIdArticle(id: number){
    this.articleService.getById(id)
    .subscribe((resp: Article) => {
      this.article = resp
      this.userArticle = resp.user
      this.articleName = resp.title
    })
  }

  update(){
    console.log(this.article.user)
    this.article.user = new UserLogin
    this.article.user.id = this.userArticle.id
    console.log(this.article.user)
    console.log(this.article)
    this.articleService.putArticle(this.article)
    .subscribe((resp: Article) =>{
      this.article = resp
      console.log(resp)
      this.alerts.showAlertSuccess("Artigo atualizado com sucesso!")
      this.router.navigate(['/forum'])
    })
  }
}
