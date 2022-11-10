import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumRoutingModule } from './forum-routing.module';
import { ForumComponent } from './forum.component';
import { ThemeComponent } from './theme/theme.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleComponent } from './article/article.component';
import { EditThemeComponent } from '../edit/edit-theme/edit-theme.component';
import { DeleteThemeComponent } from '../delete/delete-theme/delete-theme.component';
import { ArticleShowComponent } from '../show/article-show/article-show.component';
import { DeleteArticleComponent } from '../delete/delete-article/delete-article.component';
import { EditArticleComponent } from '../edit/edit-article/edit-article.component';


@NgModule({
  declarations: [
    ForumComponent,
    ThemeComponent,
    ArticleComponent,
    EditThemeComponent,
    DeleteThemeComponent,
    ArticleShowComponent,
    DeleteArticleComponent,
    EditArticleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ForumRoutingModule
  ]
})
export class ForumModule { }
