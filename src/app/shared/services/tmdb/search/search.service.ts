import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ApiKeyService } from '../../api-key/api-key.service';
import { SearchCollectionResponse } from '../../../classes/search/search-collection-response';
import { SearchCompanyResponse } from '../../../classes/search/search-company-response';
import { SearchKeywordResponse } from '../../../classes/search/search-keyword-response';
import { SearchMovieResponse } from '../../../classes/search/search-movie-response';
import { SearchMultiResponse } from '../../../classes/search/search-multi-response';
import { SearchPeopleResponse } from '../../../classes/search/search-people-response';
import { SearchTvShowResponse } from '../../../classes/search/search-tv-show-response';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

  private apiKey: string;
  private searchUrl = '/search';
  private collectionUrl = '/collection';
  private companyUrl = '/company';
  private keywordUrl = '/keyword';
  private movieUrl = '/movie';
  private multiUrl = '/multi';
  private peopleUrl = '/person';
  private tvShowUrl = '/tv';

  constructor(private http: Http, private as: ApiKeyService) {
    this.apiKey = as.apiKey;
  }

  /**
   * Search for collections.
   * @param baseUrl The tmdb base url.
   * @param query The query string without the api key.
   */
  public searchCollection(baseUrl: string, query: string): Observable<SearchCollectionResponse> {
    return this.http.get(`${baseUrl}${this.searchUrl}${this.collectionUrl}?api_key=${this.apiKey}&${query}`)
      .map(response => response.json());
  }

  /**
   * Search for companies.
   * @param baseUrl The tmdb base url.
   * @param query The query string without the api key.
   */
  public searchCompany(baseUrl: string, query: string): Observable<SearchCompanyResponse> {
    return this.http.get(`${baseUrl}${this.searchUrl}${this.companyUrl}?api_key=${this.apiKey}&${query}`)
      .map(response => response.json());
  }

  /**
   * Search for keywords.
   * @param baseUrl The tmdb base url.
   * @param query The query string without the api key.
   */
  public searchKeyword(baseUrl: string, query: string): Observable<SearchKeywordResponse> {
    return this.http.get(`${baseUrl}${this.searchUrl}${this.keywordUrl}?api_key=${this.apiKey}&${query}`)
      .map(response => response.json());
  }

  /**
   * Search for movies.
   * @param baseUrl The tmdb base url.
   * @param query The query string without the api key.
   */
  public searchMovie(baseUrl: string, query: string): Observable<SearchMovieResponse> {
    return this.http.get(`${baseUrl}${this.searchUrl}${this.movieUrl}?api_key=${this.apiKey}&${query}`)
      .map(response => response.json());
  }

  /**
   * Search multiple models in a single request.
   * Multi search currently supports searching for movies, tv shows and people in a single request.
   * @param baseUrl The tmdb base url.
   * @param query The query string without the api key.
   */
  public searchMulti(baseUrl: string, query: string): Observable<SearchMultiResponse> {
    return this.http.get(`${baseUrl}${this.searchUrl}${this.multiUrl}?api_key=${this.apiKey}&${query}`)
      .map(response => response.json());
  }

  /**
   * Search for people.
   * @param baseUrl The tmdb base url.
   * @param query The query string without the api key.
   */
  public searchPeople(baseUrl: string, query: string): Observable<SearchPeopleResponse> {
    return this.http.get(`${baseUrl}${this.searchUrl}${this.peopleUrl}?api_key=${this.apiKey}&${query}`)
      .map(response => response.json());
  }

  /**
   * Search for a TV show.
   * @param baseUrl The tmdb base url.
   * @param query The query string without the api key.
   */
  public searchTvShow(baseUrl: string, query: string): Observable<SearchTvShowResponse> {
    return this.http.get(`${baseUrl}${this.searchUrl}${this.tvShowUrl}?api_key=${this.apiKey}&${query}`)
      .map(response => response.json());
  }

}
