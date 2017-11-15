/**
 * page component.
 */
import {
    Component,
    Input,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'page',
    template: '<ng-content></ng-content>',
    styleUrls: ['./style.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        '[class]': '_class',
        '[class._page]': 'true',
        '[class.wrap]': '_wrap',
    },
})

export class Page implements OnInit {

    @Input('class') private _class = '';

    @Input('wrap') private _wrap = false;

    constructor() { }

    ngOnInit() { }
}
