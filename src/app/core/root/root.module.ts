import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root.component';
import { SharedModule } from '../modules/shared.module';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { NavbarModule } from 'src/app/main/navbar/navbar.module';
import { FrequentDataService } from '../services/frequent-data.service';
import { ReferralModule } from './content/referral/referral.module';
import { MarketplaceModule } from './content/marketplace/marketplace.module';
import { CommissionModule } from './content/commission/commission.module';
import { AppDataService } from '../services/app-data.service';
import { EditProfileModule } from './content/edit-profile/edit-profile.module';

@NgModule({
  exports: [
    RootComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    NavbarModule,
    ReferralModule,
    MarketplaceModule,
    CommissionModule,
    EditProfileModule
  ],
  declarations: [
    RootComponent,
    ContentComponent
  ],
  providers: [
    FrequentDataService,
    AppDataService
  ]
})
export class RootModule { }
