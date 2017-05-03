/**
 * app sidebar logo component.
 */
import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';

@Component({
    selector: 'app-sidebar-logo',
    templateUrl: './index.html',
    styleUrls: ['./style.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        '[class.app-sidebar-logo]': 'true'
    }
})

export class AppSidebarLogo { }