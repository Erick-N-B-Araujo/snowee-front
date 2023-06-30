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

}