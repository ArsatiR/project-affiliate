import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { SharedModule } from '../core/modules/shared.module';

@NgModule({
  exports: [HomepageComponent],
  imports: [
    CommonModule,
    SharedModule,

  ],
  declarations: [HomepageComponent],
})
export class HomepageModule { }
