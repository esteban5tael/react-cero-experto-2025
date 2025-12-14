import { Heart, Users, Zap } from "lucide-react";

import { Badge, Spinner } from "@/components/";
import { HeroStatCard } from "./HeroStatCard";
import { useHeroesStats } from "@/heroes/hooks/useHeroesStats";

export const HeroStats = () => {
    const { isError, isLoading, heroesStats } = useHeroesStats();

    if (isLoading) {
        return (
            <div className="flex items-center gap-4">
                <Spinner className="size-8 text-blue-500" />
            </div>
        );
    }
    if (isError) {
        return <h1>Error loading data</h1>;
    }

    if (heroesStats)
        return (
            <>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {/* Totals */}
                    <HeroStatCard
                        title="Total Characters"
                        icon={
                            <Users className="h-4 w-4 text-muted-foreground" />
                        }
                    >
                        <div className="text-2xl font-bold">
                            {heroesStats.totalHeroes}
                        </div>
                        <div className="flex gap-1 mt-2">
                            <Badge
                                variant="secondary"
                                className="text-xs"
                            >
                                {heroesStats.heroCount} Heroes
                            </Badge>
                            <Badge
                                variant="destructive"
                                className="text-xs"
                            >
                                {heroesStats.villainCount} Villains
                            </Badge>
                        </div>
                    </HeroStatCard>

                    {/* Favorites */}
                    <HeroStatCard
                        title="Favorites"
                        icon={
                            <Heart className="h-4 w-4 text-muted-foreground" />
                        }
                    >
                        <div className="text-2xl font-bold text-red-600">
                            3
                        </div>
                        <p className="text-xs text-muted-foreground">
                            18.8% of total
                        </p>
                    </HeroStatCard>

                    {/* Strongest */}
                    <HeroStatCard
                        title="Strongest"
                        icon={
                            <Zap className="h-4 w-4 text-muted-foreground" />
                        }
                    >
                        <div className="text-2xl font-bold text-orange-600">
                            {heroesStats.strongestHero.alias}
                        </div>
                        <p className="text-xs text-muted-foreground">
                            Strength:{" "}
                            {heroesStats.smartestHero.strength}/10
                        </p>
                    </HeroStatCard>

                    <HeroStatCard
                        title="Smartest"
                        icon={
                            <Heart className="h-4 w-4 text-muted-foreground" />
                        }
                    >
                        <div className="text-2xl font-bold text-blue-600">
                            {heroesStats.smartestHero.alias}
                        </div>
                        <p className="text-xs text-muted-foreground">
                            Intelligence:{" "}
                            {heroesStats.smartestHero.intelligence}/10
                        </p>
                    </HeroStatCard>
                </div>
            </>
        );
};
