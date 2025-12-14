import type { HeroInterface } from "@/heroes/interfaces";
import { HeroGridCard } from "./HeroGridCard";

interface HeroGridProps {
    heroes: HeroInterface[];
}

export const HeroGrid = (heroes: HeroGridProps) => {
    return (
        <>
            {/* Character Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {heroes.heroes.map((hero) => (
                    <HeroGridCard key={hero.id} hero={hero} />
                ))}
            </div>
        </>
    );
};
