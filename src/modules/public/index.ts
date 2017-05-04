/**
 * public module.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ExcurModule } from 'excur-angular';

import { PublicComponentsModule } from './components';
export * from './components';


const modules = [CommonModule, RouterModule, FormsModule, ExcurModule, PublicComponentsModule];

@NgModule({
    imports: modules,
    exports: modules
})
export class PublicModule { }

export * from './routing';