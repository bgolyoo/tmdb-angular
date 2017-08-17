import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiKeyComponent } from './api-key.component';
import { ApiKeyRoutingModule } from './api-key-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ApiKeyRoutingModule
  ],
  declarations: [ApiKeyComponent]
})
export class ApiKeyModule { }
