import { useSearchParams } from "react-router";
import {
    Tabs,
    TabsList,
    TabsTrigger,
    CustomJumbotron,
    TabsContent,
    CustomPagination,
    CustomBreadcrumbs,
    Spinner,
} from "@/components/";
import { HeroGrid, HeroStats } from "@/heroes/components";
import { useMemo, useEffect, use } from "react";
import { useHeroesStats, usePaginatedHeroes } from "@/heroes/hooks";
import { FavoriteHeroContext } from "@/heroes/contexts";

export function HomePage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { data: heroesStats } = useHeroesStats();
    const activeTab = searchParams.get("tab") ?? "all";
    const page = Number(searchParams.get("page") ?? "1");
    const limit = Number(searchParams.get("limit") ?? 6);
    const category = searchParams.get("category") ?? "hero";
    const { favoritesCount ,favorites} = use(FavoriteHeroContext);

    const selectedTab = useMemo(() => {
        const validTabs = ["all", "favorites", "heroes", "villains"];
        return validTabs.includes(activeTab) ? activeTab : "all";
    }, [activeTab]);

    const {
        isError,
        isLoading,
        data: heroesResponse,
    } = usePaginatedHeroes(page, limit, category);

    useEffect(() => {
        if (heroesResponse && page > heroesResponse.pages) {
            setSearchParams((prev) => {
                prev.set("page", "1");
                return prev;
            });
        }
    }, [heroesResponse, page, setSearchParams]);

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

    if (heroesResponse)
        return (
            <>
                {/* Header */}
                <CustomJumbotron
                    title="Welcome to the Superheroes Database"
                    description="Discover and manage your favorite superheroes and villains all in one place."
                />

                {/* Breadcrumbs */}
                <CustomBreadcrumbs currentPage="Super Heroes" />

                {/* Stats Dashboard */}
                <HeroStats />

                {/* Tabs */}
                <Tabs value={selectedTab} className="mb-8">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger
                            value="all"
                            onClick={() =>
                                setSearchParams((prev) => {
                                    prev.set("tab", "all");
                                    prev.set("category", "all");
                                    prev.set("page","1");
                                    return prev;
                                })
                            }
                        >
                            All Characters ({heroesStats?.totalHeroes}
                            )
                        </TabsTrigger>
                        <TabsTrigger
                            value="favorites"
                            onClick={() =>
                                setSearchParams((prev) => {
                                    prev.set("tab", "favorites");
                                    return prev;
                                })
                            }
                            className="flex items-center gap-2"
                        >
                            Favorites ({favoritesCount})
                        </TabsTrigger>
                        <TabsTrigger
                            value="heroes"
                            onClick={() =>
                                setSearchParams((prev) => {
                                    prev.set("tab", "heroes");
                                    prev.set("category", "hero");
                                    prev.set("page","1");
                                    return prev;
                                })
                            }
                        >
                            Heroes ({heroesStats?.heroCount})
                        </TabsTrigger>
                        <TabsTrigger
                            value="villains"
                            onClick={() =>
                                setSearchParams((prev) => {
                                    prev.set("tab", "villains");
                                    prev.set("category", "villain");
                                    prev.set("page","1");
                                    return prev;
                                })
                            }
                        >
                            Villains ({heroesStats?.villainCount})
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="all">
                        {/* Character Grid */}
                        <h1>All Characters</h1>
                        <HeroGrid
                            heroes={heroesResponse.heroes ?? []}
                        />
                    </TabsContent>
                    <TabsContent value="favorites">
                        <h1> Favorites Heroes</h1>
                        <HeroGrid heroes={favorites} />
                    </TabsContent>
                    <TabsContent value="heroes">
                        <h1> All Heroes</h1>
                        <HeroGrid
                            heroes={heroesResponse.heroes ?? []}
                        />
                    </TabsContent>
                    <TabsContent value="villains">
                        <h1> All Villains</h1>
                        <HeroGrid
                            heroes={heroesResponse.heroes ?? []}
                        />
                    </TabsContent>
                </Tabs>

                {/* Pagination */}
                <CustomPagination
                    totalPages={heroesResponse.pages ?? 1}
                />
            </>
        );
}

export default HomePage;
