import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/core/modules/shared.module';
import { EditProfileComponent } from './edit-profile.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [EditProfileComponent],
  entryComponents: [
    EditProfileComponent
  ]
})
export class EditProfileModule { }
