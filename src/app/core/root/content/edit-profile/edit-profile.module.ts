import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SharedModule } from 'src/app/core/modules/shared.module';
import { EditProfileComponent } from './edit-profile.component';
import { EditProfileService } from './edit-profile.service';

@NgModule({
  exports:[EditProfileComponent],
  imports: [
    CommonModule,
    SharedModule,

  ],
  declarations: [EditProfileComponent],
  providers:[
    EditProfileService,
    DatePipe
  ]
})
export class EditProfileModule { }
