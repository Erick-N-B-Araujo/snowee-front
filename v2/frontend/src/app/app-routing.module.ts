import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

//Declaração de rotas
const routes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent
  },
  { 
    path: 'users', 
    loadChildren: 
      () => import('./components/users/users.module')
        .then(x => x.UsersModule)
  },
  { 
    path: 'portfolio', 
    component: PortfolioComponent
  },
  { 
    path: 'sobre', 
    component: AboutComponent
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
