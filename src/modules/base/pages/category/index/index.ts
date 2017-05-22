/**
 * base category page.
 */
import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';

@Component({
    selector: 'base-category-page',
    templateUrl: './index.html',
    styleUrls: ['./style.scss'],
    encapsulation: ViewEncapsulation.None
})

export class BaseCategoryPage implements OnInit {
    constructor() { }

    ngOnInit() { }
}