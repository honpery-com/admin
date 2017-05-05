/**
 * article index list component.
 */
import {
    Component,
    OnInit,
    ViewEncapsulation,
    Input
} from '@angular/core';
import { ArticleAPI, Article, ArticleId } from 'sdk_honpery_com';
import { Observable } from 'rxjs/Rx';

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

    private _articles: any;

    constructor() { }

    ngOnInit() {
        this._articles = this._getArticleList();
    }

    private _getArticleList(conditions = {}) {
        return ArticleAPI.list(conditions);
    }
}