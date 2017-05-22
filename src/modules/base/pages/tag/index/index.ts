/**
 * base tag page.
 */
import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';

@Component({
    selector: 'base-tag-page',
    templateUrl: './index.html',
    styleUrls: ['./style.scss'],
    encapsulation: ViewEncapsulation.None
})

export class BaseTagPage implements OnInit {
    constructor() { }

    ngOnInit() { }
}