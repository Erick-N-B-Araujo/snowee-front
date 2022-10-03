import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

//Declaração de rotas
const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'users', component: UserComponent},
  //Quando o caminho da rota for vazio, redireciona
  { path: '', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //Importa as rotas no inicio
    RouterModule.forRoot(routes)
  ],
  //Exporta e executa
  exports: [ RouterModule ]
})

//Classe para importar e definir as rotas da SPA
export class AppRoutingModule { }
