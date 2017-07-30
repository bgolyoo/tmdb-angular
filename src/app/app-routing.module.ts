import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiKeyGuard } from './shared/services/api-key/api-key.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'discover',
    pathMatch: 'full'
  },
  {
    path: 'api-key',
    loadChildren: 'app/api-key/api-key.module#ApiKeyModule'
  },
  {
    path: 'discover',
    loadChildren: 'app/discover/discover.module#DiscoverModule',
    canActivate: [ApiKeyGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
