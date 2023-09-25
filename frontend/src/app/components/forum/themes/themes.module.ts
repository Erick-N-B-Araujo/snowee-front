import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
import { ThemesComponent } from './themes.component';
import { ThemesRoutingModule } from './themes.routing.module';

@NgModule({
  declarations: [
    ThemesComponent
  ],
  imports: [
    CommonModule,
    ThemesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ThemesModule { }
