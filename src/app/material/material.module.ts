import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule
  } from '@angular/material/button';
  import{
    MatToolbarModule
  } from '@angular/material/toolbar'
  import{
    MatIconModule
  } from '@angular/material/icon'
import{
  MatCardModule
} from '@angular/material/card'
import {MatTableModule} from '@angular/material/table'
import {MatFormFieldModule} from'@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatDialogModule } from '@angular/material/dialog'
import { MatSelectModule} from '@angular/material/select'
import{MatCheckboxModule} from '@angular/material/checkbox'
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from'@angular/material/list';
import { MatGridListModule} from '@angular/material/grid-list';
@NgModule({
  declarations: [],
  imports: [
    MatGridListModule,
    MatListModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    CommonModule,
    MatFormFieldModule
  ],
  exports: [
    MatGridListModule,
    MatListModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }
