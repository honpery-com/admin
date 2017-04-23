/**
 * public module.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ExcurModule } from 'excur-angular';

const modules = [CommonModule, RouterModule, FormsModule, ExcurModule];

@NgModule({
    imports: modules,
    exports: modules
})
export class PublicModule { }

export * from './routing';