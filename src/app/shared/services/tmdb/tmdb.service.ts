import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ApiKeyService } from '../api-key/api-key.service';
import { SearchService } from './search/search.service';

import { DiscoverResponse } from '../../classes/discover-response';
import { DiscoverQuery } from '../../classes/discover-query';
import { Genre } from '../../classes/genre';
import { Configuration } from '../../classes/configuration';
import { Utils } from '../../classes/utils';

import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/take';

import { SearchCollectionResponse } from '../../classes/search/search-collection-response';
import { SearchCompanyResponse } from '../../classes/search/search-company-response';
import { SearchKeywordResponse } from '../../classes/search/search-keyword-response';
import { SearchMovieResponse } from '../../classes/search/search-movie-response';
import { SearchMultiResponse } from '../../classes/search/search-multi-response';
import { SearchPeopleResponse } from '../../classes/search/search-people-response';
import { SearchTvShowResponse } from '../../classes/search/search-tv-show-response';
import { SearchCollectionQuery } from '../../classes/search/search-collection-query';
import { SearchCompanyQuery } from '../../classes/search/search-company-query';
import { SearchKeywordQuery } from '../../classes/search/search-keyword-query';
import { SearchMovieQuery } from '../../classes/search/search-movie-query';
import { SearchMultiQuery } from '../../classes/search/search-multi-query';
import { SearchPeopleQuery } from '../../classes/search/search-people-query';
import { SearchTvShowQuery } from '../../classes/search/search-tv-show-query';

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

  constructor(private http: Http, private as: ApiKeyService, private searchService: SearchService) {
    this.initGenres();
  }

  public configuration(): void {
    this.http.get(`${this.baseUrl}${this.configurationUrl}?api_key=${this.as.apiKey}`)
      .map(resp => resp.json())
      .subscribe(
      (configuration: Configuration) => {
        this.conf = configuration;
        window['config'] = configuration;
      },
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

  public searchCollection(queryObj: SearchCollectionQuery): Observable<SearchCollectionResponse> {
    return this.searchService.searchCollection(this.baseUrl, Utils.getQueryString(queryObj));
  }

  public searchCompany(queryObj: SearchCompanyQuery): Observable<SearchCompanyResponse> {
    return this.searchService.searchCompany(this.baseUrl, Utils.getQueryString(queryObj));
  }

  public searchKeyword(queryObj: SearchKeywordQuery): Observable<SearchKeywordResponse> {
    return this.searchService.searchKeyword(this.baseUrl, Utils.getQueryString(queryObj));
  }

  public searchMovie(queryObj: SearchMovieQuery): Observable<SearchMovieResponse> {
    return this.searchService.searchMovie(this.baseUrl, Utils.getQueryString(queryObj));
  }

  public searchMulti(queryObj: SearchMultiQuery): Observable<SearchMultiResponse> {
    return this.searchService.searchMulti(this.baseUrl, Utils.getQueryString(queryObj));
  }

  public searchPeople(queryObj: SearchPeopleQuery): Observable<SearchPeopleResponse> {
    return this.searchService.searchPeople(this.baseUrl, Utils.getQueryString(queryObj));
  }

  public searchTvShow(queryObj: SearchTvShowQuery): Observable<SearchTvShowResponse> {
    return this.searchService.searchTvShow(this.baseUrl, Utils.getQueryString(queryObj));
  }

  private initGenres(): void {
    this.getGenres().take(1).subscribe(
      (resp: { genres: Array<Genre> }) => {
        this._genres.next(resp.genres);
      }
    );
  }

}
