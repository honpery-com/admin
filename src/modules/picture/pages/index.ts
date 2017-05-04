/**
 * picture pages module.
 */
import { NgModule } from '@angular/core';
import * as pages from './pages';
import { PublicModule, RoutingModule } from '../../public';

const _pages = Object.values(pages);

@NgModule({
    imports: [PublicModule],
    exports: _pages,
    declarations: _pages
})
export class PicturePagesModule { }

@NgModule({
    imports: [PicturePagesModule, RoutingModule.forRoot(pages, 'picture')]
})
export class PictureRoutingModule { }
