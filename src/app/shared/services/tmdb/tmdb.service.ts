import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ApiKeyService } from '../api-key/api-key.service';
import { DiscoverResponse } from '../../classes/discover-response';
import { DiscoverQuery } from '../../classes/discover-query';
import { Genre } from '../../classes/genre';
import { Configuration } from '../../classes/configuration';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/take';

@Injectable()
export class TmdbService {

  private configurationStorageKey = 'TMDB_CONFIGURATION';
  private _genres: ReplaySubject<Array<Genre>> = new ReplaySubject(1);

  get conf(): Configuration {
    const conf = JSON.parse(localStorage.getItem(this.configurationStorageKey));
    return conf ? conf : undefined;
  }

  set conf(conf: Configuration) {
    localStorage.setItem(this.configurationStorageKey, JSON.stringify(conf));
  }

  get genres(): Observable<Array<Genre>> {
    return this._genres.asObservable();
  }

  private baseUrl = 'https://api.themoviedb.org/3';
  private configurationUrl = '/configuration';
  private discoverUrl = '/discover';
  private genresUrl = '/genre/movie/list';

  constructor(private http: Http, private as: ApiKeyService) {
    this.initGenres();
  }

  public configuration(): void {
    this.http.get(`${this.baseUrl}${this.configurationUrl}?api_key=${this.as.apiKey}`)
      .map(resp => resp.json())
      .subscribe(
      (resp: Configuration) => this.conf = resp,
      error => console.error(error)
      );
  }

  public discover(query: DiscoverQuery, type: string): Observable<DiscoverResponse> {
    return this.genres.mergeMap(genres => {
      const url = `${this.baseUrl}${this.discoverUrl}/${type}${DiscoverQuery.getQueryString(query)}`;
      return this.http.get(url).map(resp => resp.json());
    });
  }

  public images(size: string, filePath: string): string {
    return `${this.conf.images.base_url}/${size}/${filePath}`;
  }

  public getGenres(): Observable<any> {
    return this.http.get(`${this.baseUrl}${this.genresUrl}?api_key=${this.as.apiKey}`)
      .map(resp => resp.json());
  }

  private initGenres(): void {
    this.getGenres().take(1).subscribe(
      (resp: { genres: Array<Genre> }) => {
        this._genres.next(resp.genres);
      }
    );
  }

}
