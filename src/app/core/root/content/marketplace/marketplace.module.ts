import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketplaceComponent } from './marketplace.component';
import { SharedModule } from 'src/app/core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';

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
  declarations: [MarketplaceComponent]
})
export class MarketplaceModule { }
