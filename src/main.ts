/**
 * app main entry.
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './modules/app';
import { bootloader } from '@angularclass/hmr';

enableProdMode();

function main() {
    return platformBrowserDynamic().bootstrapModule(AppModule);
}

bootloader(main);
