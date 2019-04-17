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
    ErrorLog = {
        title: {
            required: 'поле обязательно для заполнения',
            minlength: 'минимальная длина — 3',
            maxlength: 'максимальная длина — 80'
        },
        price: {
            required: 'поле обязательно для заполнения',
            pattern: 'разрешены лишь цифры',
            min: 'минимальное значение 10',
            max: 'максимальное значение 10000'
        },
    }
    form: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.form = this.formBuilder.group({
            title: ['', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(80)
            ]
            ],
            price: ['',[
                Validators.required,
                Validators.max(10000),
                Validators.min(10),
                Validators.pattern('^[0-9]+$')
            ]],
            date: [''],
            comment: [''],
        });

    }
    getErrorLog(name:string):string{
        if(name === 'title'){
            if(!this.form.get(name).errors.requered){return this.ErrorLog.title.required}

            if(this.form.get(name).errors.minlenght){return this.ErrorLog.title.minlength}

            if(this.form.get(name).errors.maxlenght){return this.ErrorLog.title.maxlength}
        }

        if(name === 'price'){
            if(!this.form.get(name).errors.requered){return this.ErrorLog.price.required}

            if(this.form.get(name).errors.min){return this.ErrorLog.price.min}

            if(this.form.get(name).errors.max){return this.ErrorLog.price.max}

            return this.ErrorLog.price.pattern;
        }
}
    

    onSubmit() {
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
