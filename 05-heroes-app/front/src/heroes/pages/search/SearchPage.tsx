import { CustomBreadcrumbs, CustomJumbotron } from "@/components";
import { HeroGrid, HeroStats } from "@/heroes/components";
import { SearchControls } from "./components";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { searchHeroesSction } from "@/heroes/actions";

export const SearchPage = () => {
    //
    const [searchParams] = useSearchParams();

    const name = searchParams.get("name") ?? undefined;
    const strength = searchParams.get("strength")
        ? Number(searchParams.get("strength"))
        : undefined;
    const team = searchParams.get("team") ?? undefined;
    const category = searchParams.get("category") ?? undefined;
    const universe = searchParams.get("universe") ?? undefined;
    const status = searchParams.get("status") ?? undefined;

    const { data: heroes = [] } = useQuery({
        queryKey: [
            "search",
            {
                name,
                strength,
                team,
                category,
                universe,
                status,
            },
        ],
        queryFn: () =>
            searchHeroesSction({
                name,
                strength,
                team,
                category,
                universe,
                status,
            }),
        staleTime: 1000 * 60 * 5, // 5 minutes
    });

    return (
        <>
            {/* Header */}
            <CustomJumbotron title="Search Your Favorites SuperHeroes" />

            {/* Breadcrumbs */}
            <CustomBreadcrumbs
                currentPage="Search"
                /* breadcrumbs={[
                    {label:'Home',to:"/"},
                    {label:'Home',to:"/"},
                    {label:'Home',to:"/"},
                ]} */
            />

            {/* Stats Dashboard */}
            <HeroStats />

            {/* Filter and Search Controls */}
            <SearchControls />

            {/* Heroes Grid */}

            <HeroGrid heroes={heroes} />
        </>
    );
};

export default SearchPage;
