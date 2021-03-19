import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { SharedModule } from '../../core/modules/shared.module';
import { FooterComponent } from './footer/footer.component';
import { NavbarModule } from '../navbar/navbar.module';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule } from '@angular/router';

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
