import {Component, OnInit} from '@angular/core';
import {IPurchase} from '../model/ipurchase';

@Component({
    selector: 'tfs-wallet',
    templateUrl: './wallet.component.html',
    styleUrls: ['./wallet.component.css'],
})
export class WalletComponent implements OnInit {
    purchases: IPurchase[] = [];
    total = 0;
    isAddPurchaseOpen = true;

    constructor() {}

    ngOnInit() {
        this.purchases = this.getData();
        this.total = this.getTotal();
    }

    toggleAdd() {
        this.isAddPurchaseOpen = !this.isAddPurchaseOpen;
    }

    onAddPurchase(purchase: IPurchase) {
        this.purchases.unshift(purchase);
        this.total = this.getTotal();
        this.toggleAdd();
    }

    private getTotal(): number {
        return this.purchases.reduce((total, {price}) => total + price, 0);
    }

    private getData(): IPurchase[] {
        return [
            {
                title: 'Проезд на метро',
                price: 1700,
                date: new Date(2019 - 2 - 30),
                comment: 'я учил меня учили',
            },
            {
                title: 'IPhone XS 512gb',
                price: 124990,
                date: new Date(2019 - 2 - 30),
                comment: 'я учил меня учили',
            },
            {
                title: 'Лапша "Доширак"',
                price: 40,
                date: new Date(2019 - 2 - 30),
                comment: 'я учил меня учили',
            },
        ];
    }
}