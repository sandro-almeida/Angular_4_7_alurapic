import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'ap-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {

    /* Output property step-by-step
    1) photo-list.component.html declares a customized event (onTyping) in ap-search tag.
    2) search.component.ts declares an @Output() property with the same name of the customized event (onTyping) above which receives an EventEmitter (from @angular/core).
    3) search.component.ts emits an event that will be read by photo-list.component.html.
    4) emitted value from search.component.ts will fall into $event in photo-list.component.html
    */
    @Output() onTyping = new EventEmitter<string>();
    @Input() valorDoInput: string = '';

    debounce: Subject<string> = new Subject<string>();

    ngOnInit(): void {
        this.debounce
        .pipe(debounceTime(300))  //300 ms; means that all the emitted values will be ignored, being considered only after 300 ms  
        .subscribe(filter => this.onTyping.emit(filter));  //event being emitted -> step 3
//        .subscribe(filter => this.filter = filter); //subscribe will listen for the emitted value and assign it to this.filter
    } 

    ngOnDestroy(): void {
        this.debounce.unsubscribe();
    }

}