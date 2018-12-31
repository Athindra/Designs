import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'searchfilter'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
 transform(items: any[], field: string, value: string): any[] {
     console.log(field,value);
   if (!items) return [];
   if(value.trim()=='')return items;
   return items.filter(it => it[field].toString().indexOf(value) != -1);
 }
}