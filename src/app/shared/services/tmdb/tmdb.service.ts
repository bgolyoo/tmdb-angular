import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ApiKeyService } from '../api-key/api-key.service';
import { DiscoverResponse } from '../../classes/discover-response';
import { DiscoverQuery } from '../../classes/discover-query';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TmdbService {

  private baseUrl = 'https://api.themoviedb.org/3';
  private discoverUrl = '/discover';

  private url = 'https://api.themoviedb.org/3/movie/550?api_key=0b1342cae11d194836ad2e02f7fb3baf';

  constructor(private http: Http, private as: ApiKeyService) { }

  public discover(query: DiscoverQuery, type: string): Observable<DiscoverResponse> {
    return this.http.get(`${this.baseUrl}${this.discoverUrl}/${type}${DiscoverQuery.getQueryString(query)}`)
      .map(resp => resp.json());
  }

}
