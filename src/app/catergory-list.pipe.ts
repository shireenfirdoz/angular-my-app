import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryList'
})
export class CategoryListPipe implements PipeTransform {
  transform(mediaItems) {
    const categories : string[] = [];
    mediaItems.forEach(mediaItem => {
      let index = categories.findIndex( x => x === mediaItem.category);
      if ( index == -1) {
          categories.push(mediaItem.category);
         }
    });
    return categories.join(', ');
  }
}
