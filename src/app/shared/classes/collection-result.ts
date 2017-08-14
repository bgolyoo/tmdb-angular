export class CollectionResult {

    id?: number;
    backdrop_path?: string | null;
    name?: string;
    poster_path?: string | null;

    constructor(obj: CollectionResult) {
        this.id = obj.id || null;
        this.backdrop_path = obj.backdrop_path || null;
        this.name = obj.name || null;
        this.poster_path = obj.poster_path || null;
    }

}
