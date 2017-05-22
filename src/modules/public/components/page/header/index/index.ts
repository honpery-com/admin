/**
 * page header component.
 */
import {
    Component,
    OnInit,
    ViewEncapsulation,
    Input
} from '@angular/core';

@Component({
    selector: 'page-header',
    template: `<ng-content></ng-content>`,
    styleUrls: ['./style.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        '[class]': '_class',
        '[class.page-header]': 'true'
    }
})

export class PageHeader implements OnInit {

    @Input('class') private _class = '';

    constructor() { }

    ngOnInit() { }
}