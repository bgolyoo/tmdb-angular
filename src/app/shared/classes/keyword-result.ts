export class KeywordResult {

    id?: number;
    name?: string;

    constructor(obj: KeywordResult) {
        this.id = obj.id || null;
        this.name = obj.name || null;
    }

}
