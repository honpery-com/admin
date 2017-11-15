/**
 * setting index page.
 */
import {
    Component,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'setting-page',
    templateUrl: './index.html',
    styleUrls: ['./style.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class SettingPage implements OnInit {
    constructor() { }

    ngOnInit() { }
}
