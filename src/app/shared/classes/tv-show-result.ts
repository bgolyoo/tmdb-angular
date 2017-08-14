export class TvShowResult {

    poster_path?: string | null;
    popularity?: number;
    id?: number;
    backdrop_path?: string | null;
    vote_average?: number;
    media_type?: string;
    overview?: string;
    first_air_date?: string;
    origin_country?: Array<string>;
    genre_ids?: Array<number>;
    original_language?: string;
    vote_count?: number;
    name?: string;
    original_name?: string;

    constructor(obj: TvShowResult) {
        this.poster_path = obj.poster_path || null;
        this.popularity = obj.popularity || null;
        this.id = obj.id || null;
        this.backdrop_path = obj.backdrop_path || null;
        this.vote_average = obj.vote_average || null;
        this.media_type = obj.media_type || null;
        this.overview = obj.overview || null;
        this.first_air_date = obj.first_air_date || null;
        this.origin_country = obj.origin_country || null;
        this.genre_ids = obj.genre_ids || null;
        this.original_language = obj.original_language || null;
        this.vote_count = obj.vote_count || null;
        this.name = obj.name || null;
        this.original_name = obj.original_name || null;
    }

}
