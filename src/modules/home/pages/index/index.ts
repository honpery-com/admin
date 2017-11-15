/**
 * index page component.
 */
import {
    Component,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'home-page',
    templateUrl: './index.html',
    styleUrls: ['./style.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class HomePage implements OnInit {
    constructor() { }

    ngOnInit() { }
}
