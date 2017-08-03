import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscoverComponent } from './discover.component';
import { DiscoverRoutingModule } from './discover-routing.module';
import { DiscoverResultComponent } from './discover-result/discover-result.component';

@NgModule({
  imports: [
    CommonModule,
    DiscoverRoutingModule
  ],
  declarations: [
    DiscoverComponent,
    DiscoverResultComponent
  ]
})
export class DiscoverModule { }
