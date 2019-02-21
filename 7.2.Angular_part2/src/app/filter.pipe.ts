import { Pipe, PipeTransform } from '@angular/core';
import { News } from './news';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: News[], term: string): News[] {
    return value.filter((news) => {
      return news.title.toLocaleLowerCase().includes(term.toLocaleLowerCase())
        || news.description.toLocaleLowerCase().includes(term.toLocaleLowerCase());
    });
  }

}
