import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../core/modules/shared.module';
import { LoginService } from '../login/login.service'
@NgModule({
  exports: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  providers: [
    LoginService
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
