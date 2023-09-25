import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';

//Declaração de rotas
const routes: Routes = [
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'signin',
    component:SigninComponent
  },
  {
    path: '',
    component:UsersComponent
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
export class UsersRoutingModule { }
