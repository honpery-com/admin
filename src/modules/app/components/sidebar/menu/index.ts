/**
 * 侧边栏菜单组件
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
const router = require('../../../../../config/router.json');

@Component({
    selector: 'app-sidebar-menu',
    templateUrl: './index.html',
    styleUrls: ['./style.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppSidebarMenuComponent {

    // router config 
    private router: any[] = router;
}