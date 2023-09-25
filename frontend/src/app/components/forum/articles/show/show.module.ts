import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowComponent } from './show.component';
import { ShowRoutingModule } from './show.routing.module';

@NgModule({
  declarations: [
    ShowComponent
  ],
  imports: [
    CommonModule,
    ShowRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShowModule {}
