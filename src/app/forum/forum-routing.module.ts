import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteThemeComponent } from '../delete/delete-theme/delete-theme.component';
import { EditThemeComponent } from '../edit/edit-theme/edit-theme.component';
import { ForumComponent } from './forum.component';
import { ThemeComponent } from './theme/theme.component';

const routes: Routes = [
  {
    path: 'themes',
    component:ThemeComponent
  },
  {
    path: 'theme-edit/:id',
    component:EditThemeComponent
  },
  {
    path: 'theme-delete/:id',
    component:DeleteThemeComponent
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
