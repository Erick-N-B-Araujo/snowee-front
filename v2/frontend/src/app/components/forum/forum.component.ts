import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'forum',
  templateUrl: './forum.component.html',
  styleUrls: ['../../css/app.component.scss']
})

export class ForumComponent {
  name:string = "Suzan1";
  title:string = "Python: Calculadora doida frenetica";
  subtitle:string = "Aprenda como criar uma calculadora simples em python";
  description:string = "Este passo a passo esplanatorio se deu em meio ao desenrolar de um curso de python que comprei recentemente. Vamos as instruções: ";
  instruction:string = "1-Instalar as dependencias com o arquivo requirements.txt na raiz do projeto: ";
  code:string = "pip install -y python3";
  ending:string = "Se você seguiu os passos a risca, agora deve ter uma calculadora simples e funcional."

  instructionsList:string[] = ["1-Instalar as dependencias com o arquivo requirements.txt na raiz do projeto: " , "2-Instalar as dependencias com o arquivo requirements.txt na raiz do projeto: "]
  codesList:string[] = ["pip install -y python3","pip remove -y python3"];

  constructor(private renderer:Renderer2) {}

  @ViewChild('instructions', { static: false }) instructions: ElementRef;

  ngAfterViewInit() {
    for (let i=0; i < this.instructionsList.length; i++) {
      this.addSteps(this.instructionsList[i]);
      this.addSnippet(this.codesList[i]);
    }
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

  public addSteps(stepText:string){
    const p = this.renderer.createElement('p')
    this.renderer.addClass(p, "p-1")
    this.renderer.addClass(p, "mt-2")
    this.renderer.addClass(p, "mb-2")
    const text = this.renderer.createText(stepText)
    this.renderer.appendChild(p, text);
    this.renderer.appendChild(this.instructions.nativeElement, p);
  }
}