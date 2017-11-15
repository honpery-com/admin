/**
 * string helper
 */
export const Str = {
    bigCamel(...paths: string[]) {
        return paths.map((path = '') => path.charAt(0).toUpperCase() + path.substr(1)).join('');
    },

    smallCamel(...paths: string[]) {
        const result = Str.bigCamel(...paths);
        return result.charAt(0).toLowerCase() + result.substr(1);
    },
};
