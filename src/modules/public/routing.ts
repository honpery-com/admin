/**
 * module router gen.
 */
import { RouterModule } from '@angular/router';
import { bigCamel } from '../../utils';
const config = require('../../config/router.json');

export class RoutingModule {
    static forRoot(components, moduleName) {

        const moduleConfig = config.filter(item => item.path === moduleName)[0];

        if (!moduleConfig) throw new Error(`Module router error: ${moduleName} not find.`);

        let names = [];
        function genConfig(ref) {
            names.push(ref.name || ref.path);
            ref.children = ref.children || [];
            let result: any = {
                path: ref.path,
                children: [],
                data: {
                    title: ref.title,
                    children: ref.children
                },
                componentName: bigCamel(...bigCamel(...names, 'page').split('_')),
                component: components[bigCamel(...bigCamel(...names, 'page').split('_'))]
            };
            if (ref.children.length) {
                result.children = ref.children.map(child => genConfig(child));
                result.children.push({ path: '', redirectTo: ref.children[0].path, pathMatch: 'full' });
            }
            names.pop();
            return result;
        }

        let result = <any>genConfig(moduleConfig).children;
        return RouterModule.forChild(result);
    }
}
