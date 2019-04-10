import { Pipe, PipeTransform } from '@angular/core';
import {ConvertCase} from './convertCase';
@Pipe({
  name: 'convertCase'
})
export class ConvertCasePipe implements PipeTransform {

  transform(value: string, type: ConvertCase): string {
      if(type.isUpper){
          return value.toUpperCase();
      }

      if(type.isLower){
          return value.toLowerCase();
      }

      if(type.isTitle){
          return value.split(' ').map(cur=>cur[0].toUpperCase()+cur.slice(1)).join(' ');
      }

      return value;
  }

}
