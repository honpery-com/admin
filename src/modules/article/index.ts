/**
 * article module.
 */
import { NgModule } from '@angular/core';

import { ArticlePagesModule } from './pages';
export * from './pages';

const modules = [ArticlePagesModule];

@NgModule({
    imports: modules,
    exports: modules
})
export class ArticleModule { }
