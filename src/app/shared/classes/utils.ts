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

}
