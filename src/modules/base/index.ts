/**
 * base module.
 */
import { NgModule } from '@angular/core';

import { BasePagesModule } from './pages';
export * from './pages';

const _modules = [BasePagesModule];

@NgModule({
    imports: _modules,
    exports: _modules,
})
export class BaseModule { }
