import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'ap-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {

    debounce: Subject<string> = new Subject<string>();

    ngOnInit(): void {
        this.debounce
        .pipe(debounceTime(300));  //300 ms; means that all the emitted values will be ignored, being considered only after 300 ms  
//        .subscribe(filter => this.filter = filter); //subscribe will listen for the emitted value and assign it to this.filter
    } 

    ngOnDestroy(): void {
        this.debounce.unsubscribe();
    }

}