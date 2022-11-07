import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumRoutingModule } from './forum-routing.module';
import { ForumComponent } from './forum.component';
import { ThemeComponent } from './theme/theme.component';

@NgModule({
  declarations: [
    ForumComponent,
    ThemeComponent
  ],
  imports: [
    CommonModule,
    ForumRoutingModule
  ]
})
export class ForumModule { }
