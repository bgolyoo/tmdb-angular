import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SingleSelectComponent } from './single-select.component';
import { OutsideClickDirective } from '../../directives/outside-click/outside-click.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SingleSelectComponent,
    OutsideClickDirective
  ],
  exports: [SingleSelectComponent]
})
export class SingleSelectModule { }
