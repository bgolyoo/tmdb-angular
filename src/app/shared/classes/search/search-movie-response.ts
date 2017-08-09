import { SearchResponse } from './search-response';
import { MovieResult } from '../movie-result';

export class SearchMovieResponse extends SearchResponse {

    results?: Array<MovieResult>;

}
