import {
    Tabs,
    TabsList,
    TabsTrigger,
    CustomJumbotron,
    TabsContent,
    CustomPagination,
    CustomBreadcrumbs,
} from "@/components/";
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action";
import { HeroGrid, HeroStats } from "@/heroes/components";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
export function HomePage() {
    const [activeTab, setActiveTab] = useState<
        "all" | "favorites" | "heroes" | "villains"
    >("villains");

    const { isError, isLoading, data } = useQuery({
        queryKey: ["heroes"],
        queryFn: () => getHeroesByPageAction,
        staleTime: 1000 * 60 * 5, // 5 minutes
    });

    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (isError) {
        return <h1>Error loading data</h1>;
    }

    if (data)
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
                <Tabs value={activeTab} className="mb-8">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger
                            value="all"
                            onClick={() => setActiveTab("all")}
                        >
                            All Characters (16)
                        </TabsTrigger>
                        <TabsTrigger
                            value="favorites"
                            onClick={() => setActiveTab("favorites")}
                            className="flex items-center gap-2"
                        >
                            Favorites (3)
                        </TabsTrigger>
                        <TabsTrigger
                            value="heroes"
                            onClick={() => setActiveTab("heroes")}
                        >
                            Heroes (12)
                        </TabsTrigger>
                        <TabsTrigger
                            value="villains"
                            onClick={() => setActiveTab("villains")}
                        >
                            Villains (2)
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="all">
                        {/* Character Grid */}
                        <h1>All Characters</h1>
                        <HeroGrid />
                    </TabsContent>
                    <TabsContent value="favorites">
                        <h1> Favorites Heroes</h1>
                        <HeroGrid />
                    </TabsContent>
                    <TabsContent value="heroes">
                        <h1> All Heroes</h1>
                        <HeroGrid />
                    </TabsContent>
                    <TabsContent value="villains">
                        <h1> All Villains</h1>
                        <HeroGrid />
                    </TabsContent>
                </Tabs>

                {/* Pagination */}
                <CustomPagination totalPages={8} />
            </>
        );
}

export default HomePage;
