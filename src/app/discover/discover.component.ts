import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../shared/services/tmdb/tmdb.service';
import { ApiKeyService } from '../shared/services/api-key/api-key.service';
import { DiscoverResponse } from '../shared/classes/discover-response';
import { DiscoverQuery } from '../shared/classes/discover-query';
import { Genre } from '../shared/classes/genre';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {

  public response: DiscoverResponse;
  private genres: Array<Genre>;
  private searchQuery: DiscoverQuery;

  constructor(private tmdb: TmdbService, private apiKeyService: ApiKeyService) { }

  ngOnInit() {
    this.initSearchQuery();
    this.initGenres();
  }

  private initGenres(): void {
    this.tmdb.genres.subscribe((genres: Array<Genre>) => this.genres = genres);
  }

  private initSearchQuery(): void {
    this.searchQuery = {
      api_key: this.apiKeyService.apiKey
    };
  }

  private search(): void {
    this.tmdb.discover(this.searchQuery, 'movie').subscribe(
      (resp: DiscoverResponse) => this.response = resp,
      error => console.error(error)
    );
  }

  public onFilterChange(filters: DiscoverQuery): void {
    this.searchQuery = filters;
    this.search();
  }

}
