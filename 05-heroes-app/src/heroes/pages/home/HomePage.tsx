

import {
    
    Tabs,
    TabsList,
    TabsTrigger,
    CustomJumbotron,
    TabsContent,
    CustomPagination,
} from "@/components/";
import { HeroGrid, HeroStats } from "@/heroes/components";
import { useState } from "react";
export function HomePage() {
    const [activeTab, setActiveTab] = useState<
        "all" | "favorites" | "heroes" | "villains"
    >("villains");
    return (
        <>
            {/* Header */}
            <CustomJumbotron
                title="Welcome to the Superheroes Database"
                description="Discover and manage your favorite superheroes and villains all in one place."
            />

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
            <CustomPagination 
            totalPages={8}
            />
        </>
    );
}

export default HomePage;
