export class SearchCompanyQuery {

    /** The api key. Required. */
    api_key: string;

    /** Pass a text query to search. This value should be URI encoded. Required. */
    query: string;

    /** Specify which page to query. Optional. */
    page?: number;

}
