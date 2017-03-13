import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: './app/views/heroes.component.html',
    styleUrls: ['./app/styles/heroes.component.css']
})

export class HeroesComponent implements OnInit {
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
