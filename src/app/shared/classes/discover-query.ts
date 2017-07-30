export class DiscoverQuery {

    /** The api key. Required. */
    api_key: string;

    /** Specify a language to query translatable fields with. MinLength: 2. Pattern: ([a-z]{2})-([A-Z]{2}). Default: en-US. Optional. */
    language?: string;

    /** Specify a ISO 3166-1 code to filter release dates. Must be uppercase. Pattern: ^[A-Z]{2}$. Optional. */
    region?: string; // ISO 3166-1 code to filter release dates, must be uppercase, pattern: ^[A-Z]{2}$

    /**
     * Choose from one of the many available sort options.
     * Allowed Values:
     * popularity.asc, popularity.desc, release_date.asc, release_date.desc,
     * revenue.asc, revenue.desc, primary_release_date.asc, primary_release_date.desc,
     * original_title.asc, original_title.desc, vote_average.asc, vote_average.desc, vote_count.asc, vote_count.desc.
     * Default: popularity.desc.
     * Optional.
     */
    sort_by?: string;

    /** Used in conjunction with the certification filter, use this to specify a country with a valid certification. Optional. */
    certification_country?: string;

    /** Filter results with a valid certification from the 'certification_country' field. Optional. */
    certification?: string;

    /** Filter and only include movies that have a certification that is less than or equal to the specified value. Optional. */
    'certification.lte'?: string;

    /** A filter and include or exclude adult movies. Default. Optional. */
    include_adult?: boolean;

    /** A filter to include or exclude videos. Default. Optional. */
    include_video?: boolean;

    /** Specify the page of results to query. Minimum: 1. Maximum: 1000. Default: 1. Optional. */
    page?: number;

    /** A filter to limit the results to a specific primary release year. Optional. */
    primary_release_year?: number;

    /**
     * Filter and only include movies that have a primary release date that is greater or equal to the specified value.
     * Optional.
     * Format: date.
     */
    'primary_release_date.gte'?: string;

    /**
     * Filter and only include movies that have a primary release date that is less than or equal to the specified value.
     * Optional.
     * Format: date.
    */
    'primary_release_date.lte'?: string;

    /**
     * Filter and only include movies that have a release date (looking at all release dates)
     * that is greater or equal to the specified value.
     * Optional.
     * Format: date.
    */
    'release_date.gte'?: string;

    /**
     * Filter and only include movies that have a release date (looking at all release dates)
     * that is less than or equal to the specified value.
     * Optional.
     * Format: date.
    */
    'release_date.lte'?: string;

    /** Filter and only include movies that have a vote count that is greater or equal to the specified value. Optional. Minimum: 0. */
    'vote_count.gte'?: number;

    /** Filter and only include movies that have a vote count that is less than or equal to the specified value. Optional. Minimum: 1. */
    'vote_count.lte'?: number;

    /** Filter and only include movies that have a rating that is greater or equal to the specified value. Optional. Minimum: 0. */
    'vote_average.gte'?: number;

    /** Filter and only include movies that have a rating that is less than or equal to the specified value. Optional. Minimum: 0. */
    'vote_average.lte'?: number;

    /** A comma separated list of person ID's. Only include movies that have one of the ID's added as an actor. Optional. */
    with_cast?: string;

    /** A comma separated list of person ID's. Only include movies that have one of the ID's added as a crew member. Optional. */
    with_crew?: string;

    /**
     * A comma separated list of production company ID's. Only include movies that have one of the ID's added as a production company.
     * Optional.
    */
    with_companies?: string;

    /** Comma separated value of genre ids that you want to include in the results. Optional. */
    with_genres?: string;

    /** A comma separated list of keyword ID's. Only include movies that have one of the ID's added as a keyword. Optional. */
    with_keywords?: string;

    /**
     * A comma separated list of person ID's. Only include movies that have one of the ID's added as a either a actor or a crew member.
     * Optional.
    */
    with_people?: string;

    /** A filter to limit the results to a specific year (looking at all release dates). Optional. */
    year?: number;

    /** Comma separated value of genre ids that you want to exclude from the results. Optional. */
    without_genres?: string;

    /** Filter and only include movies that have a runtime that is greater or equal to a value. Optional. */
    'with_runtime.gte'?: number;

    /** Filter and only include movies that have a runtime that is less than or equal to a value. Optional. */
    'with_runtime.lte'?: number;

    /**
     * Specify a comma (AND) or pipe (OR) separated value to filter release types by.
     * These release types map to the same values found on the movie release date method.
     * Optional.
     * Minimum: 1.
     * Maximum: 6.
    */
    with_release_type?: number;

    /** Specify an ISO 639-1 string to filter results by their original language value. Optional. */
    with_original_language?: string;

    /** Exclude items with certain keywords. You can comma and pipe seperate these values to create an 'AND' or 'OR' logic. Optional. */
    without_keywords?: string;

    public static getQueryString(obj: DiscoverQuery): string {
        const queryParams: Array<string> = [];
        Object.keys(obj).forEach(key => {
            if (obj.hasOwnProperty(key)) {
                queryParams.push(`${key}=${obj[key]}`);
            }
        });
        return `?${queryParams.join('&')}`;
    }

}
