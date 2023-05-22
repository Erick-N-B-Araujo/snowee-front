import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Declaração de rotas
const routes: Routes = [
  { 
    path: 'home', 
    loadChildren: 
      () => import('./components/home/home.module')
        .then(x => x.HomeModule)
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
