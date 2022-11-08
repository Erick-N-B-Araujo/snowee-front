import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumRoutingModule } from './forum-routing.module';
import { ForumComponent } from './forum.component';
import { ThemeComponent } from './theme/theme.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleComponent } from './article/article.component';


@NgModule({
  declarations: [
    ForumComponent,
    ThemeComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ForumRoutingModule
  ]
})
export class ForumModule { }
