import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteThemeComponent } from '../delete/delete-theme/delete-theme.component';
import { EditThemeComponent } from '../edit/edit-theme/edit-theme.component';
import { ForumComponent } from './forum.component';
import { ThemeComponent } from './theme/theme.component';
import { ArticleShowComponent } from '../show/article-show/article-show.component';
import { DeleteArticleComponent } from '../delete/delete-article/delete-article.component';
import { EditArticleComponent } from '../edit/edit-article/edit-article.component';

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
    path: 'article-edit/:id',
    component: EditArticleComponent
  },
  {
    path: 'article-delete/:id',
    component:DeleteArticleComponent
  },
  {
    path: 'article-show/:id',
    component:ArticleShowComponent
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
