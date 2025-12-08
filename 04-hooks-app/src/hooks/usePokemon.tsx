import { useEffect, useState } from "react";

import axios from "axios";

import type { PokemonInterface } from "../interfaces";

import { environments } from "@/environtments";

interface Props {
    id: number;
}

export const usePokemon = ({ id }: Props) => {
    const [pokemon, setPokemon] = useState<PokemonInterface | null>(
        null
    );

    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const getPokemonById = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get<PokemonInterface>(
                    `${environments.pokemonApiUrl}/${id}`
                );

                setPokemon({
                    id: id,
                    name: response.data.name,
                    imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
                });
            } catch {
                console.log("Error Fetching Pokémon");
            } finally {
                setIsLoading(false);
            }
        };
        getPokemonById();
    }, [id]);

    return {
        isLoading,
        pokemon,
    };
};
