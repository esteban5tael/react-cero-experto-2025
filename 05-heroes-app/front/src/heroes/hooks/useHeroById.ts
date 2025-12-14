import { useQuery } from "@tanstack/react-query";

import { getHeroByIdAction } from "../actions";

export const useHeroById = (idSlug: string) => {
    return useQuery({
        queryKey: ["heroe", { idSlug }],
        queryFn: () => getHeroByIdAction(idSlug),
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
};
