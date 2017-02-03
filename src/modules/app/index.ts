/**
 * app module.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import * as components from './components/';

@NgModule({
    imports: [BrowserModule, CommonModule],
    declarations: [...Object.values(components)],
    exports: [],
    providers: [],
    bootstrap: [components.AppComponent]
})
export class AppModule { }