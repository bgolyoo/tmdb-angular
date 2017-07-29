import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiKeyService } from '../api-key/api-key.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  public apiKey: string;

  constructor(private apiKeyServiec: ApiKeyService, private router: Router) { }

  public onSubmit(): void {
    this.apiKeyServiec.apiKey = this.apiKey;
    this.router.navigate(['/discover']);
  }

}
