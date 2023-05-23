import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopNavComponent } from './components/top-nav/top-nav.component';

//Declaração de rotas
const routes: Routes = [
  { 
    path: 'home', 
    loadChildren: 
      () => import('./components/home/home.module')
        .then(x => x.HomeModule)
  },
  { 
    path: 'users', 
    loadChildren: 
      () => import('./components/users/users.module')
        .then(x => x.UsersModule)
  },
  //Quando o caminho da rota for vazio, redireciona
  { 
    path: '', 
    pathMatch:'full', 
    redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
