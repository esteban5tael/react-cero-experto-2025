import { CustomHeader, PreviousSearches, SearchBar } from "./";
import { GifList } from "./GifList";

export const GifsApp = () => {
    return (
        <>
            {/* Header */}
            <CustomHeader
                title={"Buscador de Gifs"}
                description={"Descubre y comparte el gif perfecto"}
            />

            {/* Search */}
            <SearchBar placeholder="Buscar Gifs" />

            {/* Previous Searches */}
            <PreviousSearches />

            {/* GifList */}
            <GifList />
        </>
    );
};
