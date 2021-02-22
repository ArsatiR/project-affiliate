import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from './registerPage.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../core/modules/shared.module';

// const routes: Routes = [
//   {
//     path: '/register',
//     component: RegisterPageComponent,
//   }
// ];

@NgModule({
  exports: [
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    // RouterModule.forChild(routes)
  ],
  declarations: [RegisterPageComponent]
})
export class RegisterPageModule { }
