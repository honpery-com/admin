/**
 * user pages module.
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
export class UserPagesModule { }

@NgModule({
    imports: [UserPagesModule, RoutingModule.forRoot(pages, 'user')],
})
export class UserRoutingModule { }
