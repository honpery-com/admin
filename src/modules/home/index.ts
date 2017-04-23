/**
 * index module.
 */
import { NgModule } from '@angular/core';
import { HomePagesModule, HomeRoutingModule } from './pages';

const modules = [HomePagesModule];

@NgModule({
    imports: modules,
    exports: modules
})
export class HomeModule { }

export {
    HomeRoutingModule
};
