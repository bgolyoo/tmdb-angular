import { MovieResult } from './movie-result';

export class DiscoverResponse {

    page: number;
    results: Array<MovieResult>;
    total_results: number;
    total_pages: number;

}
