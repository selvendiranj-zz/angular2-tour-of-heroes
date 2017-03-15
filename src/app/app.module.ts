import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeroesModule } from './heroes/heroes.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HeroesModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
