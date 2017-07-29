import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ApiKeyService } from '../api-key/api-key.service';
import { DiscoverResponse } from '../shared/classes/discover-response';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TmdbService {

  private baseUrl = 'https://api.themoviedb.org/3';
  private discoverUrl = '/discover';

  private url = 'https://api.themoviedb.org/3/movie/550?api_key=0b1342cae11d194836ad2e02f7fb3baf';

  constructor(private http: Http, private as: ApiKeyService) { }

  public call(): Observable<DiscoverResponse> {
    return this.http.get(`${this.baseUrl}${this.discoverUrl}/movie?api_key=${this.as.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
      .map(resp => resp.json());
  }

}
