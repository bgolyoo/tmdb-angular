import { SearchResponse } from './search-response';
import { PeopleResult } from '../people-result';

export class SearchPeopleResponse extends SearchResponse {

    results?: Array<PeopleResult>;

}
