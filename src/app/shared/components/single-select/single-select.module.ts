import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SingleSelectComponent } from './single-select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [SingleSelectComponent],
  exports: [SingleSelectComponent]
})
export class SingleSelectModule { }
