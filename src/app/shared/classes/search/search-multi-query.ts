export class SearchMultiQuery {

    /** The api key. Required. */
    api_key?: string;

    /** Pass a ISO 639-1 value to display translated data for the fields that support it. Optional. */
    language?: string;

    /** Pass a text query to search. This value should be URI encoded. Required. */
    query: string;

    /** Specify which page to query. Optional. */
    page?: number;

    /** Choose whether to inlcude adult (pornography) content in the results. Optional. */
    include_adult?: boolean;

    /** Specify a ISO 3166-1 code to filter release dates. Must be uppercase. Optional. */
    region?: string;

}
