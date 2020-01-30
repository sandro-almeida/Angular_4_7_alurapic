import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos: Object[] = [];

  constructor(
    httpClient: HttpClient
  ) {
    httpClient
      .get<Object[]>('http://localhost:3000/flavio/photos')  //it returns an Observable; data is not yet retrieved; Object[] is the data type returned by the endpoint
      .subscribe(photos => {  //with subscribe then data is in fact retrieved
        this.photos = photos;
        console.log('photos', this.photos);
      });
  }

}
