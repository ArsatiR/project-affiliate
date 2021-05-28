import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from './registerPage.component';
import { SharedModule } from '../../core/modules/shared.module';
import { LoginComponent } from '../login/login.component';
import { LoginModule } from '../login/login.module';
import { RegisterPageService } from './registerPage.service';

@NgModule({
  exports: [
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LoginModule
    // RouterModule.forChild(routes)
  ],
  providers: [
    RegisterPageService
  ],
  declarations: [RegisterPageComponent],
  entryComponents: [LoginComponent]
})
export class RegisterPageModule { }
