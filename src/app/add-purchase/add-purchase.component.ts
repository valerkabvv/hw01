import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IPurchase} from '../model/ipurchase';

@Component({
    selector: 'tfs-add-purchase',
    templateUrl: './add-purchase.component.html',
    styleUrls: ['./add-purchase.component.css'],
})
export class AddPurchaseComponent implements OnInit {
    @Output() addPurchase = new EventEmitter<IPurchase>();
    public TitleCondition = false;
    public InputCondition = false;
    titleErrorLog = '';
    priceErrorLog = '';
    form: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.form = this.formBuilder.group({
            title: ['', Validators.required],
            price: [''],
            date: [''],
            comment: [''],
        });

        this.form.valueChanges.subscribe(value => {
            // tslint:disable-next-line:no-console
            console.log(value);
        });
    }
    titleOnInput() {
        const isEmpty = this.form.value.title.length === 0;
        const isBigger = this.form.value.title.length > 80;
        const isSmaller = this.form.value.title.length < 3;

        if (isEmpty) {
            this.titleErrorLog = 'поле обязательно для заполнения';
        }

        if (isBigger) {
            this.titleErrorLog = 'максимальная длина — 80';
        }

        if (isSmaller) {
            this.titleErrorLog = 'минимальная длина — 3';
        }

        if (isEmpty || isBigger || isSmaller) {
            this.TitleCondition = false;
        } else {
            this.TitleCondition = true;
        }
    }
    priceOnInput() {
        const price = parseInt(this.form.value.price, 10);

        const isEmpty = !this.form.value.price;
        const isBigger = price > 10000;
        const isSmaller = price < 10;
        const isSymbol = this.form.value.price.search(/\D/) !== -1;

        if (isEmpty) {
            this.priceErrorLog = 'поле обязательно для заполнения';
        }

        if (isBigger) {
            this.priceErrorLog = 'максимальное значение — 10000';
        }

        if (isSmaller) {
            this.priceErrorLog = 'минимальное значение — 10';
        }

        if (isSymbol) {
            this.priceErrorLog = 'разрешены лишь цифры';
        }

        if (isSmaller || isBigger || isSymbol || isEmpty) {
            this.InputCondition = false;
        } else {
            this.InputCondition = true;
        }
    }

    onSubmit() {
        const isInvalid = !this.TitleCondition && !this.InputCondition;

        if (isInvalid) {
            return;
        }

        if (!this.form.value.date) {
            this.form.value.date = new Date();
        }

        const purchase: IPurchase = {
            title: this.form.value.title,
            price: parseInt(this.form.value.price, 10),
            date: this.form.value.date,
        };

        if (this.form.value.comment) {
            purchase.comment = this.form.value.comment;
        }

        this.addPurchase.emit(purchase);
    }
}
