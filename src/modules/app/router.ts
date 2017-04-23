/**
 * app router module.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { bigCamel } from '../../utils';
const routerConfig = require('../../config/router.json');

const AppRoutes: Routes = [{ path: '', redirectTo: '/home', pathMatch: 'full' }]
    .concat(routerConfig.map(route => ({
        path: route.path,
        loadChildren: () => new Promise(resolve => (require as any).ensure([], () =>
            resolve(require(`../${route.path}/index`)[bigCamel(route.path, 'routing', 'module')])))
    })));

@NgModule({
    imports: [RouterModule, RouterModule.forRoot(AppRoutes)],
    exports: [RouterModule],
    declarations: [],
    providers: []
})
export class AppRouterModule { }
