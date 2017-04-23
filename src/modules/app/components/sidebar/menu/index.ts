/**
 * app sidebar menu component.
 */
import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
const router = require('../../../../../config/router.json');

@Component({
    selector: 'app-sidebar-menu',
    templateUrl: './index.html',
    styleUrls: ['./style.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        '[class.app-sidebar-menu]': 'true'
    }
})
export class AppSidebarMenu {
    private _router = router;
}