/**
 * picture index page.
 */
import {
    Component,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'picture-page',
    templateUrl: './index.html',
    styleUrls: ['./style.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class PicturePage implements OnInit {
    constructor() { }

    ngOnInit() { }
}
