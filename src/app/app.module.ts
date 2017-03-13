import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app.component';
import { HeroesComponent } from './components/heroes.component';
import { HeroDetailComponent } from './components/hero-detail.component';
import { DashboardComponent } from './components/dashboard.component';
import { HeroService } from './services/hero.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
            { path: 'heroes', component: HeroesComponent },
            { path: 'dashboard', component: DashboardComponent }
        ])
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        DashboardComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
