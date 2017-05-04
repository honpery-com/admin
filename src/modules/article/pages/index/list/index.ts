/**
 * article index list component.
 */
import {
    Component,
    OnInit,
    ViewEncapsulation,
    Input
} from '@angular/core';

@Component({
    selector: 'article-index-list',
    templateUrl: './index.html',
    styleUrls: ['./style.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        '[class.article-index-list]': 'true'
    }
})

export class ArticleIndexList implements OnInit {
    constructor() { }

    ngOnInit() { }
}