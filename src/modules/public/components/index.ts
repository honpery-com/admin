/**
 * public components module.
 */
import { NgModule } from '@angular/core';
import * as components from './components';

const _components = Object.values(components);

@NgModule({
    imports: [],
    exports: _components,
    declarations: _components
})
export class PublicComponentsModule { }
