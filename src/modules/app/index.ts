/**
 * app module.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import * as components from './components/';
import { ExcurModule } from '@excur/excur';

@NgModule({
    imports: [BrowserModule, CommonModule, ExcurModule],
    declarations: [...Object.values(components)],
    exports: [],
    providers: [],
    bootstrap: [components.AppComponent]
})
export class AppModule { }