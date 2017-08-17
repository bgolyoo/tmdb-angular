import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscoverComponent } from './discover.component';
import { DiscoverRoutingModule } from './discover-routing.module';
import { DiscoverResultsModule } from './discover-result/discover-result.module';
import { DiscoverFiltersModule } from './discover-filters/discover-filters.module';

@NgModule({
  imports: [
    CommonModule,
    DiscoverRoutingModule,
    DiscoverFiltersModule,
    DiscoverResultsModule
  ],
  declarations: [
    DiscoverComponent
  ]
})
export class DiscoverModule { }
