/**
 * setting module.
 */
import { NgModule } from '@angular/core';

import { SettingPagesModule } from './pages';
export * from './pages';

const _modules = [SettingPagesModule];

@NgModule({
    imports: _modules,
    exports: _modules,
})
export class SettingModule { }
