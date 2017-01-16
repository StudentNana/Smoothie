import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { HttpModule } from "@angular/http";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from './in-memory-data.service';
import './rxjs-extensions';
import {SmoothieService} from "./smoothie/smoothie.service";
import {SmoothieModule} from "./smoothie/smoothie.module";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        SmoothieModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [SmoothieService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
