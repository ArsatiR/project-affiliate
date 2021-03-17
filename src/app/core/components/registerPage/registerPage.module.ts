import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from './registerPage.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../core/modules/shared.module';
import { LoginComponent } from '../login/login.component';
import { LoginModule } from '../login/login.module';

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
    LoginModule,
    // RouterModule.forChild(routes)
  ],
  declarations: [RegisterPageComponent],
  entryComponents: [LoginComponent]
})
export class RegisterPageModule { }
