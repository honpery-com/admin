/**
 * user module.
 */
import { NgModule } from '@angular/core';

import { UserPagesModule } from './pages';
export * from './pages';

const _modules = [UserPagesModule];

@NgModule({
    imports: _modules,
    exports: _modules
})
export class UserModule { }
