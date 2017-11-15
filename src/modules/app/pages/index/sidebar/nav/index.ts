/**
 * app sidebar nav component.
 */
import {
    Component,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
const config = require('../../../../../../config/router.json');

@Component({
    selector: 'app-sidebar-nav',
    templateUrl: './index.html',
    styleUrls: ['./style.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        '[class.app-sidebar-nav]': 'true',
    },
})

export class AppSidebarNav {
    private _config = config;
}
