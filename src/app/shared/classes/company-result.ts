export class CompanyResult {

    id?: number;
    logo_path?: string | null;
    name?: string;

    constructor(obj: CompanyResult) {
        this.id = obj.id || null;
        this.logo_path = obj.logo_path || null;
        this.name = obj.name || null;
    }

}
