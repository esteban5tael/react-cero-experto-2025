import { CustomHeader, PreviousSearches, SearchBar,GifList  } from "./";


import { mockGifs,previousSearchesMock } from "../data";

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
            <PreviousSearches searches={previousSearchesMock.searches}/>

            {/* GifList */}
            <GifList gifs={mockGifs} />
        </>
    );
};
