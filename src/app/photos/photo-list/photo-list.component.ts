import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Photo } from './../photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {
  
  photos: Photo[] = [];
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();
  
  constructor(
    private activatedRoute: ActivatedRoute
  ) {}
    
  ngOnInit(): void {
    //snapshot.data allows us to access the value of photos from app.routing.module.ts
    this.photos = this.activatedRoute.snapshot.data['photos'];
    this.debounce
    .pipe(debounceTime(300))  //300 ms; means that all the emitted values will be ignored, being considered only after 300 ms  
    .subscribe(filter => this.filter = filter); //subscribe will listen for the emitted value and assign it to this.filter
    
  } 
  
  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
