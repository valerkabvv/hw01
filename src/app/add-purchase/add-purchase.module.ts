import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddPurchaseComponent} from './add-purchase.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [AddPurchaseComponent],
    exports: [AddPurchaseComponent],
    imports: [CommonModule, ReactiveFormsModule],
})
export class AddPurchaseModule {}
