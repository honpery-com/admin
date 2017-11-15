/**
 * article index empty component.
 */
import {
    Component,
    Input,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'article-index-empty',
    templateUrl: './index.html',
    styleUrls: ['./style.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        '[class.article-index-empty]': 'true',
    },
})

export class ArticleEmptyPage implements OnInit {
    constructor() { }

    ngOnInit() { }
}
