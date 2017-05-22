/**
 * page header nav component.
 */
import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'header-nav',
    templateUrl: './index.html',
    styleUrls: ['./style.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        '[class.header-nav]': 'true'
    }
})

export class HeaderNav implements OnInit {

    private _nav: Router[] = [];
    constructor(
        private _router: ActivatedRoute
    ) { }

    ngOnInit() {
        this._router.data.subscribe(({ children }) => this._nav = children);
    }
}