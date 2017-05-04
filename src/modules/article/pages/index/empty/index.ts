/**
 * article index empty component.
 */
import {
    Component,
    OnInit,
    ViewEncapsulation,
    Input
} from '@angular/core';

@Component({
    selector: 'article-index-empty',
    templateUrl: './index.html',
    styleUrls: ['./style.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        '[class.article-index-empty]': 'true'
    }
})

export class ArticleIndexEmpty implements OnInit {
    constructor() { }

    ngOnInit() { }
}