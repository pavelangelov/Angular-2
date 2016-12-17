import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MoviesComponent } from '../core/movie/movies-list.component';

// import {Ng2BootstrapModule} from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    // put all the needed data here
    imports: [BrowserModule, HttpModule],
    declarations: [AppComponent, MoviesComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
