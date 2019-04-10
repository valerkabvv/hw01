import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {IPurchase} from '../../model/ipurchase';

@Component({
    selector: 'tfs-purchase-preview',
    templateUrl: './purchase-preview.component.html',
    styleUrls: ['./purchase-preview.component.css'],
})
export class PurchasePreviewComponent implements OnInit {
    @Input() purchase: IPurchase;
    ShowFlag = false;
    static CurrentComponent: PurchasePreviewComponent;

    constructor() {}

    ngOnInit() {}

    onClick() {
        if (
            PurchasePreviewComponent.CurrentComponent !== undefined &&
            PurchasePreviewComponent.CurrentComponent !== this
        ) {
            PurchasePreviewComponent.CurrentComponent.ShowFlag = false;
            PurchasePreviewComponent.CurrentComponent = this;
            PurchasePreviewComponent.CurrentComponent.ShowFlag = true;
        } else {
            if (PurchasePreviewComponent.CurrentComponent !== this) {
                PurchasePreviewComponent.CurrentComponent = this;
            } else {
                PurchasePreviewComponent.CurrentComponent = undefined;
            }

            this.ShowFlag = !this.ShowFlag;
        }
    }
}
