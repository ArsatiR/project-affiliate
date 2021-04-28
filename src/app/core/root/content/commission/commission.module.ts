import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommissionComponent } from './commission.component';
import { SharedModule } from 'src/app/core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

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
    NgxDaterangepickerMd.forRoot()
  ],
  declarations: [CommissionComponent],
  entryComponents: [

  ]
})
export class CommissionModule { }
