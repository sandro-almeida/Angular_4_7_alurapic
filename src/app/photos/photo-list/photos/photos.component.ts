import { Photo } from './../../photo/photo';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input() photos: Photo[] = [];
  rows : any[] = [];

  constructor() { }

  //ngOnInit() was replaced by ngOnChanges() because photos inbound property was empty on ngOnInit due to the fact that the call to get photos from a web API is asynchronous, and in the very firts moment then photos is empty and ngOnInit is called just once
  ngOnChanges(changes: SimpleChanges) {
    if (changes.photos) {
      this.rows = this.groupColumns(this.photos);
    }
  }

  groupColumns(photos: Photo[]) {
    const newRows = [];  //array that will contain arrays with 3 photos each
    const NUMBER_OF_PHOTOS_PER_ROW: number = 3;

    for(let index = 0; index < photos.length; index+=NUMBER_OF_PHOTOS_PER_ROW) {
        newRows.push(photos.slice(index, index + NUMBER_OF_PHOTOS_PER_ROW));
    }
    return newRows;
}

}
