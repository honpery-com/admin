/**
 * page component.
 */
import {
    Component,
    OnInit,
    Input,
    ViewEncapsulation
} from '@angular/core';

@Component({
    selector: 'page',
    template: '<ng-content></ng-content>',
    styleUrls: ['./style.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        '[class._page]': 'true'
    }
})

export class Page implements OnInit {
    constructor() { }

    ngOnInit() { }
}