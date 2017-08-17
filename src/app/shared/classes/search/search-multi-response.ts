import { SearchResponse } from './search-response';
import { MovieResult } from '../movie-result';
import { TvShowResult } from '../tv-show-result';
import { PeopleResult } from '../people-result';

export class SearchMultiResponse extends SearchResponse {

    results: Array<MovieResult | TvShowResult | PeopleResult>;

}
