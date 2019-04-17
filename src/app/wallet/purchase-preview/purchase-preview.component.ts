import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {IPurchase} from '../../model/ipurchase';

@Component({
    selector: 'tfs-purchase-preview',
    templateUrl: './purchase-preview.component.html',
    styleUrls: ['./purchase-preview.component.css'],
})
export class PurchasePreviewComponent implements OnInit {
    @Input() purchase: IPurchase;

    constructor() {}

    ngOnInit() {}
}
