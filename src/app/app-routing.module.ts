import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, Routes, RouterModule } from '@angular/router';

//Declaração de rotas
const routes: Routes = [
  { 
    path: 'home', 
    loadChildren: 
      () => import('./home/home.module')
        .then(x => x.HomeModule)
  },
  { 
    path: 'auth', 
    loadChildren: 
      () => import('./user/user.module')
        .then(x => x.UserModule)
  },
  { 
    path: 'forum', 
    loadChildren: 
      () => import('./forum/forum.module')
        .then(x => x.ForumModule)
  },
  //Quando o caminho da rota for vazio, redireciona
  { 
    path: '', 
    pathMatch:'full', 
    redirectTo:'home'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //Importa as rotas no inicio
    RouterModule.forRoot(routes, {useHash:true})
  ],
  //Exporta e executa
  exports: [ RouterModule ]
})

//Classe para importar e definir as rotas da SPA
export class AppRoutingModule { }
