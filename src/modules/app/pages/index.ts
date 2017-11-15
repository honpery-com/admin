/**
 * app module.
 */
import { NgModule } from '@angular/core';
import { PublicModule } from '../../public';
import { SidebarShow } from '../services';
import * as pages from './pages';

const _pages = Object.values(pages);

@NgModule({
    imports: [PublicModule],
    exports: _pages,
    declarations: _pages,
    providers: [SidebarShow],
})
export class AppPagesModule { }
