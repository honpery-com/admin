/**
 * app module.
 */
import { NgModule } from '@angular/core';
import { PublicModule } from '../../public';
import * as pages from './pages';
import { SidebarShow } from '../services';

const _pages = Object.values(pages);

@NgModule({
    imports: [PublicModule],
    exports: _pages,
    declarations: _pages,
    providers: [SidebarShow]
})
export class AppPagesModule { }
