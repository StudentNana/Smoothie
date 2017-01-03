import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SmoothieSearchService } from "./smoothie-search.service";
import { Smoothie } from "./smoothie";
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'smoothie-search',
    templateUrl: 'app/smoothie/smoothie-search.component.html',
    styleUrls: ['app/smoothie/smoothie-search.component.css'],
    providers: [SmoothieSearchService]
})

export class SmoothieSearchComponent implements OnInit {
    smoothies: Observable<Smoothie[]>;
    private searchTerms = new Subject<string>();

    @Output() showDetails = new EventEmitter<Smoothie>();

    constructor( private smoothieSearchService: SmoothieSearchService ){}

    ngOnInit():void {
        this.initSmoothies();
    }

    initSmoothies() :void{
        this.smoothies = this.searchTerms
            .debounceTime(300)        // wait for 300ms pause in events
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time
                // return the http search observable
                ? this.smoothieSearchService.search(term)
                // or the observable of empty heroes if no search term
                : Observable.of<Smoothie[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<Smoothie[]>([]);
            });
    }

    search(term: string): void {
        this.searchTerms.next(term);
    }

    gotoDetail(smoothie: Smoothie): void {
        //onSelect(smoothie);
        this.smoothies = Observable.of<Smoothie[]>([]);
        this.initSmoothies();
        this.showDetails.emit(smoothie);
    }
}