import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeSpaceURL'
})
export class PipeSpaceURLPipe implements PipeTransform {

  transform(value: string): string {
    var re = / /gi; 
    var newstr = value.replace(re, "-"); 
    return newstr;
  }

}

