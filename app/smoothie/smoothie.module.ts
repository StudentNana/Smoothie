import {NgModule}      from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SmoothieDetailComponent} from "./smoothie-detail.component";
import {SmoothieEditorComponent} from "./smoothie-editor.component";
import {SmoothieCardComponent} from "./smoothie-card.component";
import {SmoothieSearchComponent} from "./smoothie-search.component";
import {Ingredients} from "./ingredients";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [
        SmoothieDetailComponent,
        SmoothieEditorComponent,
        SmoothieCardComponent,
        SmoothieSearchComponent,
        Ingredients
    ],
    exports: [
        SmoothieDetailComponent,
        SmoothieEditorComponent,
        SmoothieCardComponent,
        SmoothieSearchComponent,
        Ingredients
    ]
})
export class SmoothieModule { }