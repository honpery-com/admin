/**
 * to big camel case.
 */
export const bigCamel = (...paths: string[]) => paths.map(path => {
    let result = path.toLowerCase();
    return result.charAt(0).toUpperCase() + result.substr(1);
}).join('');