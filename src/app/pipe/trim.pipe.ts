import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(items: any, searchString: string) {
    if(!items) return []
    if(!searchString) return items
    searchString = searchString.toLowerCase()
    return items.filter((item: {Title: string, Description: string}) => item.Title.toLowerCase().includes(searchString) || item.Description.toLowerCase().includes(searchString));
  }

}
