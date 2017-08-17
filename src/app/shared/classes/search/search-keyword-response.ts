import { SearchResponse } from './search-response';
import { KeywordResult } from '../keyword-result';

export class SearchKeywordResponse extends SearchResponse {

    results?: Array<KeywordResult>;

}
