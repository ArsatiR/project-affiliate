import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { SharedModule } from '../../core/modules/shared.module';
import { RouterModule } from '@angular/router';
import { LoginModule } from '../../authentication/login/login.module';
import { LoginComponent } from '../../authentication/login/login.component';
import { MarketplaceModule } from 'src/app/core/root/content/marketplace/marketplace.module';

@NgModule({
  exports: [NavbarComponent],
  imports: [
    CommonModule,
    SharedModule,
    LoginModule,
    RouterModule,
    MarketplaceModule
  ],
  declarations: [NavbarComponent],
  entryComponents: [LoginComponent]
})
export class NavbarModule { }
