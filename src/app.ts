/**
 * app main entry.
 */
import 'es6-shim';
import 'reflect-metadata';
import 'zone.js';

import '@angular/common';
import '@angular/core';
import '@angular/http';
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/router';
import 'rxjs';

// above todo webpack common vender.

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootloader } from '@angularclass/hmr';
import { AppModule } from './modules/app';

enableProdMode();
bootloader(() => platformBrowserDynamic().bootstrapModule(AppModule));
