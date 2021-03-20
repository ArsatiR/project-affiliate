import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root.component';
import { SharedModule } from '../modules/shared.module';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { NavbarModule } from 'src/app/main/navbar/navbar.module';
import { FrequentDataService } from '../services/frequent-data.service';

@NgModule({
  exports: [
    RootComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    NavbarModule,
  ],
  declarations: [
    RootComponent,
    ContentComponent
  ],
  providers: [
    FrequentDataService
  ]
})
export class RootModule { }
