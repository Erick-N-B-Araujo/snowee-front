import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles.component';
import { ShowComponent } from './show/show.component';

//Declaração de rotas
const routes: Routes = [
  { 
    path: 'show', 
    loadChildren: 
      () => import('./show/show.module')
        .then(x => x.ShowModule)
  },
  { 
    path: '', 
    component: ArticlesComponent
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
export class ArticlesRoutingModule { }
