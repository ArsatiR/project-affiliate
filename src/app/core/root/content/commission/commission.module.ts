import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommissionComponent } from './commission.component';
import { SharedModule } from 'src/app/core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { CommissionService } from './commission.service';
import { MoneyConfirmPasswordComponent } from '../money-confirm-password/money-confirm-password.component';
import { MoneyConfirmPasswordModule } from '../money-confirm-password/money-confirm-password.module';

const routes: Routes =[
  {
    path: 'commission',
    component: CommissionComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    NgxChartsModule,
    NgxDaterangepickerMd.forRoot(),
    MoneyConfirmPasswordModule
  ],
  declarations: [CommissionComponent],
  providers: [
    CommissionService
  ],
  entryComponents: [
    MoneyConfirmPasswordComponent
  ]
})
export class CommissionModule { }
