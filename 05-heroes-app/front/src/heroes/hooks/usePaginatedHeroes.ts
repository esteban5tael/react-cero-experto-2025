import { useQuery } from "@tanstack/react-query";
import { getHeroesByPageAction } from "../actions";

export const usePaginatedHeroes = (
    page: number,
    limit: number,
    category: string = "all"
) => {
    return useQuery({
        queryKey: ["heroes", { page, limit ,category}],
        // queryKey: ["heroes", { page: page }, { limit: limit }],
        queryFn: () => getHeroesByPageAction(page, limit,category),
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
};
