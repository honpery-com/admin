/**
 * to big camel case.
 */
export function bigCamel(...paths: string[]) {
    return paths.map((path = '') => path.charAt(0).toUpperCase() + path.substr(1)).join('');
}
