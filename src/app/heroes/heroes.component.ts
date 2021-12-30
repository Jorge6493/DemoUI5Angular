import { Component, OnInit } from '@angular/core';
import "@ui5/webcomponents/dist/Button.js";
import '@ui5/webcomponents/dist/Input.js';
import '@ui5/webcomponents/dist/List.js';
import "@ui5/webcomponents/dist/StandardListItem.js"
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  heroes = HEROES;

  constructor() { }

  ngOnInit(): void {
  }

}
