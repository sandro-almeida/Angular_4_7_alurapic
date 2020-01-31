import { Photo } from './photo';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class PhotoService {

    constructor(private httpClient: HttpClient) {}

    listFromUser(username: string){
      return this.httpClient
        .get<Photo[]>(API + '/' + username + '/photos');  //it returns an Observable; data is not yet retrieved; Object[] is the data type returned by the endpoint
    }

    //this method will return only 12 Photos (as backend is already prepared for it), based on the page number (pagination)
    listFromUserPaginated(username: string, page: number) {

      const params = new HttpParams().append('page', page.toString()); //HttpParams to assign values to the query string
      return this.httpClient.get<Photo[]>(API + '/' + username + '/photos', { params }); //{ params } is the same as { params: params }
    }

}