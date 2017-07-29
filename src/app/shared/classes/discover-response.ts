import { DiscoverResponseResult } from './discover-response-result';

export class DiscoverResponse {

    page: number;
    results: Array<DiscoverResponseResult>;
    total_results: number;
    total_pages: number;

}
