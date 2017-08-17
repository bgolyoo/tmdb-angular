import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SingleSelectComponent } from './single-select.component';
import { OutsideClickModule } from '../../directives/outside-click/outside-click.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OutsideClickModule
  ],
  declarations: [SingleSelectComponent],
  exports: [SingleSelectComponent]
})
export class SingleSelectModule { }
