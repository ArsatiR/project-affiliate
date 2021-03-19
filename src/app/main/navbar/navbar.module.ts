import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { SharedModule } from '../../core/modules/shared.module';
import { RouterModule } from '@angular/router';
import { LoginModule } from '../../authentication/login/login.module';
import { LoginComponent } from '../../authentication/login/login.component';

@NgModule({
  exports: [NavbarComponent],
  imports: [
    CommonModule,
    SharedModule,
    LoginModule,
    RouterModule
  ],
  declarations: [NavbarComponent],
  entryComponents: [LoginComponent]
})
export class NavbarModule { }
