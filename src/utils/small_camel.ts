/**
 * to small camel case.
 */
import { bigCamel } from './big_camel';
export const smallCamel = (...paths: string[]) => {
    const result = bigCamel(...paths);
    return result.charAt(0).toLowerCase() + result.substr(1);
};
