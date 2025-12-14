import { useQuery } from "@tanstack/react-query";
import { getHeroesSummaryAction } from "../actions";

export const useHeroesStats = () => {
   

    return useQuery({
        queryKey: ["heroesStats"],
        queryFn: () => getHeroesSummaryAction(),
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
};
