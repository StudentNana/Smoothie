/**
 * Service delivering Smoothie data
 * @author  Nana
 */

import { Injectable } from '@angular/core';
import {Smoothie} from "./smoothie";
import {Http, Headers, Response} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SmoothieService {

    private smoothieUrl = 'app/smoothies';
    private smoothieUrlApi = 'http://localhost:3100/smoothies';
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor(public http: Http) { }

    getSmoothies(): Promise<Smoothie[]> {
        return this.http.get(this.smoothieUrl)
            .toPromise()
            .then(response => response.json().data as Smoothie[])
            .catch(this.handleError);
    }

    getSmoothiesSlowly(): Promise<Smoothie[]> {
        return new Promise<Smoothie[]>(resolve =>
            setTimeout(resolve, 2000)) // delay 2 seconds
            .then(() => { return this.getSmoothies(); });
    }

    getSmoothie(id: number): Promise<Smoothie> {
        const url = `${this.smoothieUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Smoothie)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }
    update(smoothie: Smoothie): Promise<Smoothie> {
        const url = `${this.smoothieUrl}/${smoothie.id}`;
        return this.http
            .put(url, JSON.stringify(smoothie), {headers: this.headers})
            .toPromise()
            .then(() => smoothie)
            .catch(this.handleError);
    }
    
    create(name: string): Promise<Smoothie> {
        return this.http
            .post(this.smoothieUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.smoothieUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
