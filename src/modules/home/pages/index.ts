/**
 * home pages module.
 */
import { NgModule } from '@angular/core';
import { PublicModule, RoutingModule } from '../../public';
import * as pages from './pages';

const _pages = Object.values(pages);

@NgModule({
    imports: [PublicModule],
    exports: _pages,
    declarations: _pages,
})
export class HomePagesModule { }

@NgModule({
    imports: [HomePagesModule, RoutingModule.forRoot(pages, 'home')],
    exports: [HomePagesModule],
})
export class HomeRoutingModule { }
