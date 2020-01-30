import { PhotoService } from './photos/photo/photo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
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
  