import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumComponent } from './forum.component';

const routes: Routes = [
  {
    path: 'forum',
    component:ForumComponent
  },
  { 
    path: '', 
    pathMatch:'full', 
    redirectTo:'forum'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
