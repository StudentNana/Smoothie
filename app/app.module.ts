import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SmoothieDetailComponent } from './smoothie/smoothie-detail.component';
import { SmoothieService } from './smoothie/smoothie.service';
import { SmoothieEditorComponent } from './smoothie/smoothie-editor.component';
import { SmoothieCardComponent } from './smoothie/smoothie-card.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        SmoothieEditorComponent,
        SmoothieCardComponent,
        SmoothieDetailComponent,
    ],
    providers: [SmoothieService],
    bootstrap: [AppComponent]
})

export class AppModule {

}