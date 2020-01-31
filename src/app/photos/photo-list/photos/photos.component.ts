import { Photo } from './../../photo/photo';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  @Input() photos: Photo[] = [];
  rows : any[] = [];

  constructor() { }

  ngOnInit() {
    this.rows = this.groupColumns(this.photos);
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
