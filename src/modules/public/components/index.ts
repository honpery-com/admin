/**
 * public components module.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExcurModule } from 'excur-angular';
import * as components from './components';

const _components = Object.values(components);

@NgModule({
    imports: [CommonModule, ExcurModule],
    exports: _components,
    declarations: _components,
})
export class PublicComponentsModule { }
