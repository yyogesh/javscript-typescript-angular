import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

const materialModule = [
  MatButtonModule,
  MatTableModule,
  MatCardModule,
  MatIconModule
]

@NgModule({
  imports: [
    CommonModule,
    ...materialModule
  ],
  exports: [...materialModule]
})
export class MaterialModule { }
