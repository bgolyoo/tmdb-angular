import { Component, OnInit, OnDestroy } from '@angular/core';
import { TmdbService } from './shared/services/tmdb/tmdb.service';
import { ApiKeyService } from './shared/services/api-key/api-key.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private subscriptions: Array<Subscription> = [];

  constructor(private tmdb: TmdbService, private as: ApiKeyService) { }

  ngOnInit(): void {
    this.fetchConfiguration();
    this.onApiKeyChange();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }

  private onApiKeyChange(): void {
    this.subscriptions.push(this.as.apiKeyChanged.subscribe((apiKey: string) => this.fetchConfiguration()));
  }

  private fetchConfiguration(): void {
    if (this.as.apiKey) {
      this.tmdb.configuration();
    }
  }

}
