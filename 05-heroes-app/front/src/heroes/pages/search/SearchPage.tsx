import { CustomBreadcrumbs, CustomJumbotron } from "@/components";
import { HeroStats } from "@/heroes/components";
import { SearchControls } from "./components";


export const SearchPage = () => {
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
        </>
    );
};

export default SearchPage;
