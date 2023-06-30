import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/model/Article';
import { ArticlesService } from 'src/app/service/articles.service';

@Component({
  selector: 'show',
  templateUrl: './show.component.html',
  styleUrls: ['../../../../css/app.component.scss']
})
export class ShowComponent implements OnInit {

  articleToShow: Article = new Article();

  constructor(
    private route: ActivatedRoute,
    private renderer:Renderer2,
    private articleService: ArticlesService
  ){}

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.setArticle(id);
  }

  
  @ViewChild('instructions', { static: false }) instructions: ElementRef;

  ngAfterViewInit() {
  }

  setArticle(id: number){
    this.articleService
      .findById(id)
        .subscribe(
          articleResp => {
            this.articleToShow = articleResp;
            for(let i=0; i < this.articleToShow.instructionList.length; i++){
              this.addStep(this.articleToShow.instructionList[i]);
              this.addSnippet(this.articleToShow.codeList[i]);
            }
          }
        );
  }

  public addSnippet(snippetText:string){
    const snippet = this.renderer.createElement('make-snippet');
    this.renderer.addClass(snippet, "p-0")
    const p = this.renderer.createElement('p')
    this.renderer.addClass(p, "p-2")
    this.renderer.addClass(p, "m-0")
    const text = this.renderer.createText(snippetText)
    this.renderer.appendChild(p, text);
    this.renderer.appendChild(snippet, p)
    this.renderer.appendChild(this.instructions.nativeElement, snippet);
  }

  public addStep(stepText:string){
    const p = this.renderer.createElement('p')
    this.renderer.addClass(p, "p-1")
    this.renderer.addClass(p, "mt-2")
    this.renderer.addClass(p, "mb-2")
    const text = this.renderer.createText(stepText)
    this.renderer.appendChild(p, text);
    this.renderer.appendChild(this.instructions.nativeElement, p);
  }

}
