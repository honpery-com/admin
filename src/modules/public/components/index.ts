/**
 * public components module.
 */
import { NgModule } from '@angular/core';
import * as components from './components';
import { CommonModule } from '@angular/common';
import { ExcurModule } from 'excur-angular';

const _components = Object.values(components);

@NgModule({
    imports: [CommonModule, ExcurModule],
    exports: _components,
    declarations: _components
})
export class PublicComponentsModule { }
