import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumComponent } from './forum.component';
import { ForumRoutingModule } from './forum.routing.module';
import { ThemesModule } from './themes/themes.module';

@NgModule({
  declarations: [
    ForumComponent
  ],
  imports: [
    ForumRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ForumModule { }
