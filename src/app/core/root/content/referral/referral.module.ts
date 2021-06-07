import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ReferralComponent } from './referral.component';
import { ReferralService } from './referral.service';

const routes: Routes =[
  {
    path: 'referral',
    component: ReferralComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReferralComponent],
  providers:[
    ReferralService
  ],
  entryComponents: [

  ]
})
export class ReferralModule { }
