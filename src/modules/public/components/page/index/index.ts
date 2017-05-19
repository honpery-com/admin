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
        '[class]': '_class',
        '[class._page]': 'true'
    }
})

export class Page implements OnInit {
    @Input('class') private _class = '';
    constructor() { }

    ngOnInit() { }
}