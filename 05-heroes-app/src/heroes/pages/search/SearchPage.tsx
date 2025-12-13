import { CustomJumbotron } from "@/components";
import { HeroStats } from "@/heroes/components";
import { SearchControls } from "./components";

export const SearchPage = () => {
    return (
        <>
            {/* Header */}
            <CustomJumbotron title="Search Your Favorites SuperHeroes" />

            {/* Stats Dashboard */}
            <HeroStats />

               {/* Filter and Search Controls */}
            <SearchControls />
        </>
    );
};

export default SearchPage;
