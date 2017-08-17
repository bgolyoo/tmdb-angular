import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DiscoverComponent } from './discover.component';
import { DiscoverRoutingModule } from './discover-routing.module';
import { DiscoverResultComponent } from './discover-result/discover-result.component';
import { DiscoverFiltersComponent } from './discover-filters/discover-filters.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DiscoverRoutingModule
  ],
  declarations: [
    DiscoverComponent,
    DiscoverResultComponent,
    DiscoverFiltersComponent
  ]
})
export class DiscoverModule { }
