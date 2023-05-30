import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['../../css/app.component.scss']
})
export class PortfolioComponent {
  public descSlugan1:string=""
  public descSlugan2:string=""
  public descSlugan3:string=""
  constructor(
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    environment.isPortfolioActive = true
  }

  trocaTextoSlugan1(){
    this.descSlugan1 = "A narrativa conta a história de um E.T. chamado Slugan, em que acidentalmente cai no planeta terra e é alvo de pesquisa dos humanos. Sendo mal-tratado, Slugan aproveita sua 1ª oportunidade de fugir daquele planeta e decide obter algumas peças de sua nave para concertar a nave e fugir com ela."
  }
  trocaTextoSlugan2(){
    this.descSlugan2 = "Slugan II continua a contar a história do homônimo ET, que ao final do jogo anterior conseguiu fugir da Terra e esta à caminho de retornar ao seu planeta natal."
  }
  trocaTextoSlugan3(){
    this.descSlugan3 = "Slugan III o personagem jogável viaja pelo espaço com o intuito de chegar ao seu planeta natal, mas até lá se depara com vários problemas, obstáculos e escassez de recursos, e então, será necessário coletar peças de nave pelo percurso das diversas fases para que consiga ao final, usar estas peças para construir uma nave e assim chegar ao planeta natal."
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

  goToPortfolio(){
    this.router.navigate(["portfolio"])
  }
}
