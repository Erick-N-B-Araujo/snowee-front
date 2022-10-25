import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';

//Declaração de rotas
const routes: Routes = [
  //Quando o caminho da rota for vazio, redireciona
  { 
    path: '', 
    component:UserComponent
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
export class UserRoutingModule { }
