import { MovieResult } from './movie-result';
import { TvShowResult } from './tv-show-result';

export class PeopleResult {

    profile_path?: string | null;
    adult?: boolean;
    id?: number;
    media_type?: string;
    known_for?: MovieResult | TvShowResult;
    name?: string;
    popularity?: number;

}
