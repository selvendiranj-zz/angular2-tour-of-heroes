import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';

@Component({
    selector: 'my-app',
    templateUrl: './app/views/app.component.html',
    styleUrls: ['./app/styles/app.component.css']
})

export class AppComponent implements OnInit {
    title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        // tslint:disable-next-line:no-trailing-whitespace
        this.heroService.getHeroesSlowly().then((heroes) => {
            // tslint:disable-next-line:no-trailing-whitespace
            this.heroes = heroes;
        });
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}
