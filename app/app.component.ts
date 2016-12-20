import { Component, OnInit } from '@angular/core';
import { Smoothie } from './smoothie';

@Component({
    selector: "my-app",
    template: "<h1> Smoothie </h1>"
})

// Smoothie Objekt
const SMOOTHIES:Smoothie[] = [
    { name: 'Apfel', image: 'foto', bewertung: 4, groesse: 200, zutaten: '2 Äpfel, 1 Banane, 1/2 Schale Erdbeeren', zubereitung: ' Waschen, schneiden' },
    { name: 'Banane', image: "foto", bewertung: 5, groesse: 250, zutaten: '1 Banane, 200g Himbeeren', zubereitung: ' Waschen, schneiden' },
    { name: 'Gurke', image: "foto", bewertung: 2, groesse: 200, zutaten: '1 Apfel, 250g Weintrauben', zubereitung: ' Waschen, schneiden' },
    { name: 'Kiwi', image: "foto", bewertung: 8, groesse: 200, zutaten: '3 Kiwi, 2 Äpfel, 1 Banane', zubereitung: ' Waschen, schneiden' },
    { name: 'Orange', image: "foto", bewertung: 6, groesse: 200, zutaten: ' 3 Orangen, 200g Erdbeeren, 1 Äpfel', zubereitung: ' Waschen, schneiden' },
    { name: 'Spinat', image: "foto", bewertung: 4, groesse: 200, zutaten: '50 g Spinat, 1 Löffel Leinenöl,  2 Äpfel', zubereitung: ' Waschen, schneiden' }
];

@Component({
    selector: 'my-app',
    styles: [`
    .selected {
      background-color: #129bd2 !important;
      color: white;
    }
    .smoothies {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 10px;
      margin: 10px;
      width: 90%;
    }
    .smoothies .pic{
       margin-left: 10px 5px 5px 5px;
       width: 60px;
       height: 87px;
    }
    .smoothies li {
      display: inline;
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #65d0fb;
      margin: .5em;
      padding: .3em 0;
      height: 100px;
      border-radius: 4px;
    }
    .smoothies li.selected:hover {
      background-color: #39a0ca !important;
      color: white;
    }
    .smoothies li:hover {
      color: #607D8B;
      background-color: #29b0e6;
      left: .1em;
    }
    .smoothies .text {
      position: relative;
      top: -3px;
      padding: 10px;
    }
    .red-bg{
        background-color: red !important;
    }
    
  `],
    template: `
    <h1>{{title}}</h1>
    <ul class="smoothies">
        <li *ngFor="let smoothie of smoothies; let i = index" [class.selected]="smoothie === selectedSmoothie" (click)="onSelect(smoothie)">
            <span class="badge">{{smoothie.id}}</span> 
            <img src="pic/smoothie.jpeg" class="pic">
            {{smoothie.name}}
        </li>
    </ul>
    <my-smoothie-detail [smoothie]= "selectedSmoothie" [details]= "details"></my-smoothie-detail>  
    
    `
})

export class AppComponent implements OnInit {
    title: string;
    smoothies: Smoothie [];
    values: string;
    selectedSmoothie: Smoothie;
    details: string = "Smoothie-Details";

    constructor(){
        this.title = "Unsere leckere Smoothies";
        this.smoothies = null;
        this.values = '';
        this.selectedSmoothie = null;

    }

    /** demo on ngOnInit usage. Called by AngularJS after constructor */
    ngOnInit():void{
        this.smoothies = SMOOTHIES;
    }

    onSelect(smoothie:Smoothie):void{
        this.selectedSmoothie = smoothie;
    }

    /** function to be toggled on keyUp in template input. Will extend this.values by current input value
     * @param event of input
     */
    onKeyUp(event:any) {
        this.values += event.target.value + ' | ';
    }
}