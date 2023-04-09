import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    UserComponent,
    LoginComponent,
    SigninComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
