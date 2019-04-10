import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MoneyPipePipe} from './money-pipe.pipe';

@NgModule({
    declarations: [MoneyPipePipe],
    exports: [MoneyPipePipe],
    imports: [CommonModule],
})
export class MoneyPipeModule {}
