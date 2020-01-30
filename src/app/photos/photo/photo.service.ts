import { Photo } from './photo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class PhotoService {

    constructor(private httpClient: HttpClient) {}

    listFromUser(username: string){
      return this.httpClient
        .get<Photo[]>(API + '/' + username + '/photos');  //it returns an Observable; data is not yet retrieved; Object[] is the data type returned by the endpoint
    }

}