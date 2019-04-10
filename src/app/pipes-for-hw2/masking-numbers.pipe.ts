import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskingNumbers'
})
export class MaskingNumbersPipe implements PipeTransform {

  transform(value: string, args?: any): string {
      if(value.length===16&&value.search(/\D/)===-1){
          return '************'+value.slice(12);
  }

      return value;
  }

}
