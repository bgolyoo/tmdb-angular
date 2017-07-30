import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiKeyService } from '../shared/services/api-key/api-key.service';

@Component({
  selector: 'app-api-key',
  templateUrl: './api-key.component.html',
  styleUrls: ['./api-key.component.scss']
})
export class ApiKeyComponent {

  public apiKey: string;

  constructor(private apiKeyServiec: ApiKeyService, private router: Router) { }

  public onSubmit(): void {
    this.apiKeyServiec.apiKey = this.apiKey;
    this.router.navigate(['/discover']);
  }

}
