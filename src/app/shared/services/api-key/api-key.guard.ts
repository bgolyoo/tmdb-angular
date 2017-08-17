import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ApiKeyService } from './api-key.service';

@Injectable()
export class ApiKeyGuard implements CanActivate {

  constructor(private router: Router, private apiKeyService: ApiKeyService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.apiKeyService.apiKey) {
      this.router.navigate(['/api-key']);
    } else {
      return true;
    }
  }
}
