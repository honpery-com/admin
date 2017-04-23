/**
 * home pages module.
 */
import { NgModule } from '@angular/core';
import { PublicModule, RoutingModule } from '../../public';
import * as components from './pages';

@NgModule({
    imports: [PublicModule],
    exports: Object.values(components),
    declarations: Object.values(components)
})
export class HomePagesModule { }

@NgModule({
    imports: [HomePagesModule, RoutingModule.forRoot(components, 'home')],
    exports: [HomePagesModule]
})
export class HomeRoutingModule { }
