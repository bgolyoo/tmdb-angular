import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DiscoverFiltersComponent } from './discover-filters.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DiscoverFiltersComponent],
  exports: [DiscoverFiltersComponent]
})
export class DiscoverFiltersModule { }
