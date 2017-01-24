import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Smoothie } from './smoothie';

@Injectable()
export class SmoothieSearchService {
    constructor(private http: Http) {}
    
    search(term: string): Observable<Smoothie[]> {
        return this.http
            .get(`app/smoothies/?name=${term}`)
            .map((r: Response) => r.json().data as Smoothie[]);
    }
}