import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SmoothieDetailComponent } from './smoothie-detail.component'

@NgModule({
    imports: [BrowserModule, FormsModule ],
    declarations: [
        AppComponent,
        SmoothieDetailComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }