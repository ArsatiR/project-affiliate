import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketplaceComponent } from './marketplace.component';
import { SharedModule } from 'src/app/core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { PromotionPopupComponent } from '../promotion-popup/promotion-popup.component';
import { MarketplaceService } from './marketplace.service';

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
    RouterModule.forChild(routes)
  ],
  providers:[
    MarketplaceService
  ],
  declarations: [MarketplaceComponent, PromotionPopupComponent],
  entryComponents: [
    PromotionPopupComponent
  ]
})
export class MarketplaceModule { }
