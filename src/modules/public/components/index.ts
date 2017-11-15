/**
 * public components module.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import * as components from './components';

const _components = Object.values(components);

@NgModule({
    imports: [CommonModule],
    exports: _components,
    declarations: _components,
})
export class PublicComponentsModule { }
