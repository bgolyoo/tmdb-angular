import { SearchResponse } from './search-response';
import { TvShowResult } from '../tv-show-result';

export class SearchTvShowResponse extends SearchResponse {

    results?: Array<TvShowResult>;

}
