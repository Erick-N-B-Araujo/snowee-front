import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';

//Declaração de rotas
const routes: Routes = [
  //Quando o caminho da rota for vazio, redireciona
  { 
    path: '', 
    component: HomeComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //Importa as rotas no inicio
    RouterModule.forChild(routes)
  ],
  //Exporta e executa
  exports: [ RouterModule ]
})

//Classe para importar e definir as rotas da SPA
export class HomeRoutingModule { }
