import type { Hero } from "./hero.interface";

export interface HeroesResponseInterface {
    total:  number;
    pages:  number;
    heroes: Hero[];
}

