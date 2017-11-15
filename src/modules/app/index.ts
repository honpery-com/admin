/**
 * app module.
 */
import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createInputTransfer, createNewHosts, removeNgStyles } from '@angularclass/hmr';
import { Log } from '../../utils';
import { PublicModule } from '../public';
import { AppPagesModule } from './pages';
import { App } from './pages/pages';
import { AppRoutingModule } from './router';

@NgModule({
    imports: [BrowserModule, AppRoutingModule, PublicModule, AppPagesModule],
    bootstrap: [App],
})
export class AppModule {
    constructor(public appRef: ApplicationRef) { }

    hmrOnInit(store: any) {
        if (!store || !store.state) return;
        Log.log('HMR store', store);
        Log.log('store.state.data:', store.state.data);
        // inject AppStore here and update it
        // this.AppStore.update(store.state)
        if ('restoreInputValues' in store) {
            store.restoreInputValues();
        }
        // change detection
        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    }

    hmrOnDestroy(store: any) {
        const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        // recreate elements
        store.disposeOldHosts = createNewHosts(cmpLocation);
        // inject your AppStore and grab state then set it on store
        // var appState = this.AppStore.get()
        store.state = { data: 'yolo' };
        // store.state = Object.assign({}, appState)
        // save input values
        store.restoreInputValues = createInputTransfer();
        // remove styles
        removeNgStyles();
    }

    hmrAfterDestroy(store: any) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
        // anything you need done the component is removed
    }
}
