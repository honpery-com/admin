/**
 * module router gen.
 */
import { RouterModule } from '@angular/router';
import { RouterConfig } from '../../config';
import { Str } from '../../utils';

export class RoutingModule {
    static forRoot(components, moduleName) {

        const moduleConfig = RouterConfig.filter(item => item.path === moduleName)[0];

        if (!moduleConfig) throw new Error(`Module router error: ${moduleName} not find.`);

        const names: string[] = [];
        function genConfig(ref) {
            names.push(ref.name || ref.path);
            ref.children = ref.children || [];
            const result: any = {
                path: ref.path,
                children: [],
                data: {
                    title: ref.title,
                    children: ref.children,
                },
                componentName: Str.bigCamel(...Str.bigCamel(...names, 'page').split('_')),
                component: components[Str.bigCamel(...Str.bigCamel(...names, 'page').split('_'))],
            };
            if (ref.children.length) {
                result.children = ref.children.map(child => genConfig(child));
                result.children.push({ path: '', redirectTo: ref.children[0].path, pathMatch: 'full' });
            }
            names.pop();
            return result;
        }

        const result = genConfig(moduleConfig).children as any;
        return RouterModule.forChild(result);
    }
}
