import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatMenuModule
} from '@angular/material';



@NgModule({
    imports: [MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatMenuModule],
    exports: [MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatMenuModule]
})
export class AngularMaterialModule { }
