import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WalletComponent} from './wallet.component';
import {PurchasePreviewComponent} from './purchase-preview/purchase-preview.component';
import {AddPurchaseModule} from '../add-purchase/add-purchase.module';
import {MoneyPipeModule} from '../money-pipe/money-pipe.module';

@NgModule({
    declarations: [WalletComponent, PurchasePreviewComponent],
    exports: [WalletComponent],
    imports: [CommonModule, AddPurchaseModule, MoneyPipeModule],
})
export class WalletModule {}
