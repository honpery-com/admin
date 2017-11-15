/**
 * app main entry.
 */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootloader } from '@angularclass/hmr';
import { AppModule } from './modules/app';

enableProdMode();

function main() {
    return platformBrowserDynamic().bootstrapModule(AppModule);
}

bootloader(main);
