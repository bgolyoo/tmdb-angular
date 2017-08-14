export class MovieResult {

    poster_path?: string | null;
    adult?: boolean;
    overview?: string;
    release_date?: string;
    genre_ids?: Array<number>;
    id?: number;
    media_type?: string;
    original_title?: string;
    original_language?: string;
    title?: string;
    backdrop_path?: string | null;
    popularity?: number;
    vote_count?: number;
    video?: boolean;
    vote_average?: number;

    constructor(obj: MovieResult) {
        this.poster_path = obj.poster_path || null;
        this.adult = obj.adult || null;
        this.overview = obj.overview || null;
        this.release_date = obj.release_date || null;
        this.genre_ids = obj.genre_ids || null;
        this.id = obj.id || null;
        this.media_type = obj.media_type || null;
        this.original_title = obj.original_title || null;
        this.original_language = obj.original_language || null;
        this.title = obj.title || null;
        this.backdrop_path = obj.backdrop_path || null;
        this.popularity = obj.popularity || null;
        this.vote_count = obj.vote_count || null;
        this.video = obj.video || null;
        this.vote_average = obj.vote_average || null;
    }

}
