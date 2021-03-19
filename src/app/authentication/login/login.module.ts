import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../core/modules/shared.module';

@NgModule({
  exports: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
