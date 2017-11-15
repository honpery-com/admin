/**
 * app module.
 */
import { NgModule } from '@angular/core';
import { PublicModule } from '../../public';
import * as pages from './pages';

const _pages = Object.values(pages);

@NgModule({
    imports: [PublicModule],
    exports: _pages,
    declarations: _pages,
})
export class AppPagesModule { }
