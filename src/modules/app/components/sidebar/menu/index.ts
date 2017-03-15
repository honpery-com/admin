/**
 * 侧边栏菜单组件
 */
import { Component, OnInit } from '@angular/core';
const router = require('../../../../../config/router.json');

@Component({
    selector: 'app-sidebar-menu',
    templateUrl: './index.html',
    styleUrls: ['./style.scss']
})
export class AppSidebarMenuComponent {
    // router config 
    private router: any[] = router;
}