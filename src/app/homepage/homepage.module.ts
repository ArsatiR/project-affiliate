import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { SharedModule } from '../core/modules/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  exports: [HomepageComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  declarations: [HomepageComponent],
})
export class HomepageModule { }
