import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPepi'
})
export class MyPepiPipe implements PipeTransform {

  transform(creditcardNumber: number, args?: any): any {
    return null;
  }

}
