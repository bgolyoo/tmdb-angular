import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../shared/services/tmdb/tmdb.service';
import { ApiKeyService } from '../shared/services/api-key/api-key.service';
import { DiscoverResponse } from '../shared/classes/discover-response';
import { DiscoverQuery } from '../shared/classes/discover-query';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {

  public response: DiscoverResponse;
  public query: DiscoverQuery;

  constructor(private tmdb: TmdbService, private apiKeyService: ApiKeyService) { }

  ngOnInit() {
    this.initQuery();
    const defaultQuery: DiscoverQuery = {
      api_key: this.apiKeyService.apiKey,
      language: 'en-US',
      sort_by: 'popularity.desc',
      include_adult: false,
      include_video: false,
      page: 1
    };
    this.tmdb.discover(this.query, 'movie').subscribe(
      (resp: DiscoverResponse) => this.response = resp,
      error => console.error(error)
    );
  }

  public getPoster(posterPath): string {
    return this.tmdb.images('w500', posterPath);
  }

  private initQuery(): void {
    this.query = {
      api_key: this.apiKeyService.apiKey
    };
  }

}
