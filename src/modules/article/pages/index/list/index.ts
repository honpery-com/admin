/**
 * article index list component.
 */
import {
    Component,
    Input,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Article, ArticleAPI, ArticleId } from 'sdk_honpery_com';

@Component({
    selector: 'article-index-list',
    templateUrl: './index.html',
    styleUrls: ['./style.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        '[class.article-index-list]': 'true',
    },
})

export class ArticleIndexList implements OnInit {

    private _articles: any;

    constructor() { }

    ngOnInit() {
        this._articles = this._getArticleList();
    }

    private _getArticleList(conditions = {}) {
        return ArticleAPI.list(conditions);
    }
}
