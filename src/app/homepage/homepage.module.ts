import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { SharedModule } from '../core/modules/shared.module';
import { RouterModule } from '@angular/router';
import { LoginModule } from '../core/components/login/login.module';
import { LoginComponent } from '../core/components/login/login.component';

@NgModule({
  exports: [HomepageComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    LoginModule
  ],
  declarations: [HomepageComponent],
  entryComponents: [LoginComponent]
})
export class HomepageModule { }
