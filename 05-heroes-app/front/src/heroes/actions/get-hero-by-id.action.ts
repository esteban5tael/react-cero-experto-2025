import { heroApi } from "../api";

import type { HeroInterface } from "../interfaces";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getHeroByIdAction = async (
    idSlug: string
): Promise<HeroInterface> => {

    const { data } = await heroApi.get<HeroInterface>(`/${idSlug}`);

    const hero = { ...data, image: `${BASE_URL}/images/${data.image}`, };

    return hero;
};
