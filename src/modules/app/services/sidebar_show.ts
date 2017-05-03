/**
 * sidebar show service.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class SidebarShow {

    show = false;

    constructor() {
        let value = localStorage.getItem('sidebar_show');
        if (value === 'true') this.show = true;
    }

    toggle() {
        console.log(this.show);
        this.show = !this.show;
        localStorage.setItem('sidebar_show', this.show + '');
    }
}