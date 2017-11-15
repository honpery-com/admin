/**
 * app sidebar component.
 */
import {
    Component,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { SidebarShow } from '../../../../services';

@Component({
    selector: 'app-sidebar',
    templateUrl: './index.html',
    styleUrls: ['./style.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        '[class.app-sidebar]': 'true',
        '[class.active]': 'sidebarShow.show',
    },
})

export class AppSidebar {
    constructor(
        private sidebarShow: SidebarShow,
    ) { }
}
