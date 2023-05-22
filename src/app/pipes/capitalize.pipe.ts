import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const result=value.split(" ").map(e=>(e[0].toUpperCase()+e.substring(1))).join(" ");
    return result;
  }

}
