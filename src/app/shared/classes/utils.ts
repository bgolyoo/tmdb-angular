export class Utils {

    public static getQueryString(obj: any): string {
        const queryParams: Array<string> = [];
        Object.keys(obj).forEach(key => {
            if (obj.hasOwnProperty(key)) {
                queryParams.push(`${key}=${obj[key]}`);
            }
        });
        return `${queryParams.join('&')}`;
    }

    public static getEnumValues(enumObj: any): Array<string> {
        const keys = Object.keys(enumObj);
        return keys.slice(keys.length / 2);
    }

    public static escapeStringRegexp(str: string): string {
        const matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
        if (typeof str !== 'string') {
            throw new TypeError('Expected a string');
        }
        return str.replace(matchOperatorsRe, '\\$&');
    }

}
