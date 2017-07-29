import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiKeyGuard } from './api-key/api-key.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/landing-page/landing-page.module#LandingPageModule',
    pathMatch: 'full'
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
