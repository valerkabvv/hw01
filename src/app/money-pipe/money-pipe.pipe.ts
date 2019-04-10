import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'money',
})
export class MoneyPipePipe implements PipeTransform {
    transform(value: string): string {
        return `💰${value}`;
    }
}
