/**
 * field map component.
 */
import {
    Component,
    OnInit,
    Input,
    ViewEncapsulation
} from '@angular/core';

@Component({
    selector: 'field',
    templateUrl: './index.html',
    styleUrls: ['./style.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        '[class._field]': 'true',
        '[class.block]': 'block',
        '[class.inline]': 'inline'
    }
})

export class Field {

    @Input() icon = '';

    @Input() name = '';

    @Input() block = false;

    @Input() inline = false;
}