import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';


@NgModule({
    imports: [
        MaterialModule,
        CommonModule,
        FormsModule,],
    exports: [
        MaterialModule,
        CommonModule,
        FormsModule,],
    declarations: [],
    providers: [],
})
export class SharedModule { }
