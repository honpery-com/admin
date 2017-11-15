/**
 * public module.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PublicComponentsModule } from './components';
export * from './components';

const modules = [CommonModule, RouterModule, FormsModule, PublicComponentsModule];

@NgModule({
    imports: modules,
    exports: modules,
})
export class PublicModule { }

export * from './routing';
