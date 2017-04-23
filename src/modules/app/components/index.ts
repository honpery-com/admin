/**
 * app components module.
 */
import { NgModule } from '@angular/core';
import * as coms from './compoennts';
import { PublicModule } from '../../public';

const components = Object.values(coms);

@NgModule({
    imports: [PublicModule],
    exports: components,
    declarations: components,
    providers: [],
})
export class AppComponentModule { }
