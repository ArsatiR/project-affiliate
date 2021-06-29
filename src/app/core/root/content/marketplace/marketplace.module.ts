import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketplaceComponent } from './marketplace.component';
import { SharedModule } from 'src/app/core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { PromotionPopupComponent } from '../promotion-popup/promotion-popup.component';
import { MarketplaceService } from './marketplace.service';
import { LoginModule } from 'src/app/authentication/login/login.module';
import { LoginComponent } from 'src/app/authentication/login/login.component';

const routes: Routes =[
  {
    path: 'marketplace',
    component: MarketplaceComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    LoginModule
  ],
  providers:[
    MarketplaceService
  ],
  declarations: [MarketplaceComponent, PromotionPopupComponent],
  entryComponents: [
    PromotionPopupComponent,
    LoginComponent
  ]
})
export class MarketplaceModule { }
