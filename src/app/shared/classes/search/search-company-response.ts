import { SearchResponse } from './search-response';
import { CompanyResult } from '../company-result';

export class SearchCompanyResponse extends SearchResponse {

    results?: Array<CompanyResult>;

}
