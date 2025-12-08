import {
    CustomHeader,
    PreviousSearches,
    SearchBar,
    GifList,
} from "./";

import { useState } from "react";
import { getGifsByQuery } from "../actions";
import type { GifInterface } from "../interfaces";

export const GifsApp = () => {
    const [gifs, setGifs] = useState<GifInterface[]>([]);
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    const handleTermClicked = (term: string) => {
        console.info("Term clicked:", term);
    };

    const handleSearch = async (query: string = "") => {
        query = query.trim().toLocaleLowerCase();

        if (query.length === 0) return;

        if (previousTerms.includes(query)) return;

        setPreviousTerms([query, ...previousTerms.slice(0, 8)]); // max 9 items

        const gifs = await getGifsByQuery(query);

        setGifs(gifs);
    };
    return (
        <>
            {/* Header */}
            <CustomHeader
                title={"Buscador de Gifs"}
                description={"Descubre y comparte el gif perfecto"}
            />

            {/* Search */}
            <SearchBar
                placeholder="Buscar Gifs"
                onQuery={(query: string) => handleSearch(query)}
            />

            {/* Previous Searches */}
            <PreviousSearches
                searches={previousTerms}
                onLabelClicked={handleTermClicked}
            />

            {/* GifList */}
            <GifList gifs={gifs} />
        </>
    );
};
