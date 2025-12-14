import type { HeroInterface } from "./hero.interface";

export interface HeroesResponseInterface {
    total:  number;
    pages:  number;
    heroes: HeroInterface[];
}

