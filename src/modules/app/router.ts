/**
 * app router module.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterConfig } from '../../config';
import { Str } from '../../utils';

const AppRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
// .concat(RouterConfig.map(route => ({
//     path: route.path,
//     loadChildren: () => new Promise(resolve => (require as any).ensure([], () =>
//         resolve(require(`../${route.path}/index`)[bigCamel(route.path, 'routing', 'module')]))),
// })));

@NgModule({
    imports: [RouterModule, RouterModule.forRoot(AppRoutes)],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class AppRoutingModule { }
