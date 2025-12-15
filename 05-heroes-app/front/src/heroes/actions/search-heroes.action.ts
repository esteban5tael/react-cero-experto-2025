import { heroApi } from "../api";
import type { HeroInterface } from "../interfaces";

interface SeachHeroesActionOptions {
    name?: string;
    team?: string;
    category?: string;
    universe?: string;
    status?: string;
    strength?: string | number|undefined;
}

const BASE_URL = import.meta.env.VITE_API_URL;

export const searchHeroesSction = async (
    options: SeachHeroesActionOptions = {}
) => {
    const { name, team, category, universe, status, strength } =
        options;

    if (
        !name &&
        !team &&
        !category &&
        !universe &&
        !status &&
        !strength
    ) {
        return [];
    }

    const { data } = await heroApi.get<HeroInterface[]>("/search", {
        params: {
            name,
            team,
            category,
            universe,
            status,
            strength,
        },
    });

    const heroes = data.map((hero) => ({
        ...hero,
        image: `${BASE_URL}/images/${hero.image}`,
    }));

    return heroes;
};
