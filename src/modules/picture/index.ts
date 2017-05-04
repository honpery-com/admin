/**
 * picture module.
 */
import { NgModule } from '@angular/core';

import { PicturePagesModule } from './pages';
export * from './pages';

const _modules = [PicturePagesModule];

@NgModule({
    imports: _modules,
    exports: _modules
})
export class PictureModule { }
