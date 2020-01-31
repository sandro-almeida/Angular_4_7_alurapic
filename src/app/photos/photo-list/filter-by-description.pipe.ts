import { Photo } from './../photo/photo';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterByDescription'})
export class FilterByDescription implements PipeTransform {
    
    //first parameter is what we want to apply the transformation
    //remaining parameters are the list of passed parameters
    transform(photos: Photo[], descriptionQuery: string) {
        descriptionQuery = descriptionQuery.toLowerCase().trim();

        if (descriptionQuery) {
            return photos.filter(photo => 
                photo.description.toLowerCase().includes(descriptionQuery));
        } else {
            return photos;
        }
    }
}