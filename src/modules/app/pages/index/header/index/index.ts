/**
 * app header component.
 */
import {
    Component,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './index.html',
    styleUrls: ['./style.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        '[class.app-header]': 'true',
    },
})

export class AppHeader { }
