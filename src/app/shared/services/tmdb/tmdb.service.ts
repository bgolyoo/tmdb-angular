import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ApiKeyService } from '../api-key/api-key.service';
import { DiscoverResponse } from '../../classes/discover-response';
import { DiscoverQuery } from '../../classes/discover-query';
import { Configuration } from '../../classes/configuration';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TmdbService {

  private configurationStorageKey = 'TMDB_CONFIGURATION';

  get conf(): Configuration {
    const conf = JSON.parse(localStorage.getItem(this.configurationStorageKey));
    return conf ? conf : undefined;
  }

  set conf(conf: Configuration) {
    localStorage.setItem(this.configurationStorageKey, JSON.stringify(conf));
  }

  private baseUrl = 'https://api.themoviedb.org/3';
  private configurationUrl = '/configuration';
  private discoverUrl = '/discover';

  constructor(private http: Http, private as: ApiKeyService) { }

  public configuration(): void {
    this.http.get(`${this.baseUrl}${this.configurationUrl}?api_key=${this.as.apiKey}`)
      .map(resp => resp.json())
      .subscribe(
      (resp: Configuration) => this.conf = resp,
      error => console.error(error)
      );
  }

  public discover(query: DiscoverQuery, type: string): Observable<DiscoverResponse> {
    return this.http.get(`${this.baseUrl}${this.discoverUrl}/${type}${DiscoverQuery.getQueryString(query)}`)
      .map(resp => resp.json());
  }

  public images(size: string, filePath: string): string {
    return `${this.conf.images.base_url}/${size}/${filePath}`;
  }

}
