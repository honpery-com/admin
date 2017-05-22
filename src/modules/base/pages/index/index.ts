/**
 * base index page.
 */
import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';

@Component({
    selector: 'base-page',
    templateUrl: './index.html',
    styleUrls: ['./style.scss'],
    encapsulation: ViewEncapsulation.None
})

export class BasePage implements OnInit {
    constructor() { }

    ngOnInit() { }
}