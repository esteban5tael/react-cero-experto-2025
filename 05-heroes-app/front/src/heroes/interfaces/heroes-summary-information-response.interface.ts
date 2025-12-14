import type { HeroInterface } from "./hero.interface";

export interface HeroesSummaryInformationResponseInterface {
    totalHeroes: number;
    strongestHero: HeroInterface;
    smartestHero: HeroInterface;
    heroCount: number;
    villainCount: number;
}
