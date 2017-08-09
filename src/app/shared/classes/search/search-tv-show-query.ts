export class SearchTvShowQuery {

    /** The api key. Required. */
    api_key?: string;

    /** Pass a ISO 639-1 value to display translated data for the fields that support it. Optional. */
    language?: string;

    /** Pass a text query to search. This value should be URI encoded. Required. */
    query: string;

    /** Specify which page to query. Optional. */
    page?: number;

    /** The first air date's year. Optional. */
    first_air_date_year?: number;

}
