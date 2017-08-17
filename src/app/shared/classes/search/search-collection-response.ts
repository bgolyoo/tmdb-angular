import { SearchResponse } from './search-response';
import { CollectionResult } from '../collection-result';

export class SearchCollectionResponse extends SearchResponse {

    results?: Array<CollectionResult>;

}
