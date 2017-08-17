import { MovieResult } from './movie-result';
import { TvShowResult } from './tv-show-result';

export class PeopleResult {

    profile_path?: string | null;
    adult?: boolean;
    id?: number;
    media_type?: string;
    known_for?: Array<MovieResult | TvShowResult>;
    name?: string;
    popularity?: number;

    constructor(obj: PeopleResult) {
        this.profile_path = obj.profile_path || null;
        this.adult = obj.adult || null;
        this.id = obj.id || null;
        this.media_type = obj.media_type || null;
        this.known_for = obj.known_for || null;
        this.name = obj.name || null;
        this.popularity = obj.popularity || null;
    }

}
