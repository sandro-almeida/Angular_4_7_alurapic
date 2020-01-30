import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Object[] = [];
  
  constructor(
    private photoService: PhotoService
  ) {}
    
    ngOnInit(): void {
      this.photoService
      .listFromUser('flavio')
      .subscribe(photos => {  //with subscribe then data is in fact retrieved
        this.photos = photos;
        console.log('photos', this.photos);
      });
    }

}
