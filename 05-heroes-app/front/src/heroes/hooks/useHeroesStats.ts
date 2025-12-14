import { useQuery } from "@tanstack/react-query";
import { getHeroesSummary } from "../actions";

export const useHeroesStats = () => {
    const {
        isError,
        isLoading,
        data: heroesStats,
    } = useQuery({
        queryKey: ["heroesStats"],
        queryFn: () => getHeroesSummary(),
        staleTime: 1000 * 60 * 5, // 5 minutes
    });

    return {
        isError,
        isLoading,
        heroesStats,
    };
};
