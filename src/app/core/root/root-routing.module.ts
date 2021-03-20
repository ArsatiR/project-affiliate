import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MarketplaceComponent } from './content/marketplace/marketplace.component';
import { RootComponent } from './root.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'main',
        component: RootComponent,
        children: [
          {
            path: 'marketplace',
            component: MarketplaceComponent
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ],
})
export class RootRoutingModule { }
