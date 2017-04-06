/**
 * index module.
 */
import { NgModule } from '@angular/core';
import * as components from './components';

@NgModule({
    imports: [],
    exports: [],
    declarations: [...Object.values(components)],
    providers: [],
})
export class HomeModule { }
