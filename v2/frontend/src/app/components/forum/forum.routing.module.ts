import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ForumComponent } from './forum.component';

//Declaração de rotas
const routes: Routes = [
  //Quando o caminho da rota for vazio, redireciona
  { 
    path: 'temas', 
    loadChildren: 
      () => import('./themes/themes.module')
        .then(x => x.ThemesModule)
  },
  { 
    path: '', 
    component: ForumComponent
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
export class ForumRoutingModule { }
