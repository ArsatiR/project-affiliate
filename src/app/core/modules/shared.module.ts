import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';


@NgModule({
    imports: [
        MaterialModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule
      ],
    exports: [
        MaterialModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule
      ],
    declarations: [],
    providers: [],
})
export class SharedModule { }
