/**
 * module router gen.
 */
import { RouterModule } from '@angular/router';
import { bigCamel } from '../../utils';
const config = require('../../config/router.json');

export class RoutingModule {
    static forRoot(components, moduleName) {
        const current = config.filter(item => item.path === moduleName)[0];

        let router = current.pages.map(page => {
            page.children = page.children || [];

            let pageName = page.name ? page.name.split('_') : [page.path];
            let result = {
                path: page.path,
                component: components[bigCamel(moduleName, ...pageName, 'page')],
                data: {
                    title: page.title,
                    children: page.children
                },
                children: []
            };

            if (page.children.length) {
                page.children.forEach(child => {
                    if (!child.path) return;
                    let childName = child.name ? child.name.split('_') : [child.path];
                    result.children.push({
                        path: child.path,
                        data: {
                            title: child.title
                        },
                        component: components[bigCamel(moduleName, ...pageName, ...childName, 'page')]
                    });
                });
                result.children.push({ path: '', redirectTo: page.children[0].path, pathMatch: 'full' });
            }

            return result;
        });

        return RouterModule.forChild(router);
    }
}