import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowComponent } from './show.component';

//Declaração de rotas
const routes: Routes = [
  { 
    path: ':id', 
    component: ShowComponent
  }
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  //Exporta e executa
  exports: [ RouterModule ]
})

//Classe para importar e definir as rotas da SPA
export class ShowRoutingModule { }
