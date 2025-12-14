import { heroApi } from "../api";

import type { HeroesResponseInterface } from "../interfaces";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getHeroesByPageAction = async (
    page: number,
    limit: number = 6,
    category: string = "all"
): Promise<HeroesResponseInterface> => {
    // await new Promise((resolve) => setTimeout(resolve, 2000)); // Simular delay de 2 segundos

    if (isNaN(limit) || limit <= 0) limit = 6;

    if (isNaN(page) || page <= 0) page = 1;

    const { data } = await heroApi.get<HeroesResponseInterface>("/", {
        params: {
            limit: limit,
            offset: (page - 1) * limit,
            category: category,
        },
    });

    const heroes = data.heroes.map((hero) => ({
        ...hero,
        image: `${BASE_URL}/images/${hero.image}`,
    }));

    const finalData = { ...data, heroes };

    return finalData;
};
