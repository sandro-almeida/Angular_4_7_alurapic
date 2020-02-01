import { PhotoService } from './../photo/photo.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from './../photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  
  photos: Photo[] = [];
  filter: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) {}
    
  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    //snapshot.data allows us to access the value of photos from app.routing.module.ts
    this.photos = this.activatedRoute.snapshot.data['photos'];
  } 
  
  load() {
    this.photoService
        .listFromUserPaginated(this.userName, ++this.currentPage)
        .subscribe(photos => {
          this.photos = this.photos.concat(photos);
          if(!photos.length) this.hasMore = false;
        });
}
}
