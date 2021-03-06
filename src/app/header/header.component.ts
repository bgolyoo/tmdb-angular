import { Component, OnInit } from '@angular/core';
import { ApiKeyService } from '../shared/services/api-key/api-key.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private apiKeyService: ApiKeyService) { }

  ngOnInit() {
  }

  public isApiKeySet(): boolean {
    return !!this.apiKeyService.apiKey;
  }
}
