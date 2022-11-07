import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumComponent } from './forum.component';
import { ThemeComponent } from './theme/theme.component';

const routes: Routes = [
  {
    path: 'themes',
    component:ThemeComponent
  },
  { 
    path: '', 
    pathMatch:'full', 
    component:ForumComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
