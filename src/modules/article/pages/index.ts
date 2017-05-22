/**
 * article pages module.
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
export class ArticlePagesModule { }


@NgModule({
    imports: [ArticlePagesModule, RoutingModule.forRoot(pages, 'article')]
})
export class ArticleRoutingModule { }

