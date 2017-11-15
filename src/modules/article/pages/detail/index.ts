/**
 * article detail page.
 */
import {
    Component,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article, ArticleAPI } from 'sdk_honpery_com';

@Component({
    selector: 'article-detail-page',
    templateUrl: './index.html',
    styleUrls: ['./style.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class ArticleDetailPage implements OnInit {

    private _article: Article = {};

    constructor(
        private _router: ActivatedRoute,
    ) { }

    ngOnInit() {
        this._router.params
            .concatMap(({ article_id }) => ArticleAPI.detail(article_id))
            .subscribe(article => this._article = article);
    }

}
