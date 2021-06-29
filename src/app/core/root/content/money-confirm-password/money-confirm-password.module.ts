import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/core/modules/shared.module';
import { MoneyConfirmPasswordComponent } from '../money-confirm-password/money-confirm-password.component';
import { CommissionService } from '../commission/commission.service';

@NgModule({
  exports:[
    MoneyConfirmPasswordComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [MoneyConfirmPasswordComponent],
  providers: [
    CommissionService
  ]
})
export class MoneyConfirmPasswordModule { }
