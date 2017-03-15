/**
 * app sidebar component.
 */
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './index.html',
    styleUrls: ['./style.scss']
})
export class AppSidebarComponent implements OnInit {
    // show sidebar token
    private show: boolean = false;
    constructor() { }

    ngOnInit() {
        this.show = localStorage.getItem('show_sidebar') === 'true';
    }

    toggleSidebar() {
        this.show = !this.show;
        localStorage.setItem('show_sidebar', (String(this.show)));
    }
}