/**
 * user index page.
 */
import {
    Component,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'user-page',
    templateUrl: './index.html',
    styleUrls: ['./style.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class UserPage implements OnInit {
    constructor() { }

    ngOnInit() { }
}
