import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { SharedModule } from '../../core/modules/shared.module';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  exports: [HomepageComponent],
  imports: [
    CommonModule,
    SharedModule,
    NavbarModule,
    RouterModule
  ],
  declarations: [HomepageComponent, FooterComponent],
})
export class HomepageModule { }
