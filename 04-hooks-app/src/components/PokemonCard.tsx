import { useCounter, usePokemon } from "@/hooks";

export const PokemonCard = () => {
    const {
        //Props
        counter,

        //Mehtods
        increment,
        decrement,
    } = useCounter(9);
    const { pokemon } = usePokemon({ id: counter });
    return (
        <>
            <div className="bg-gradient flex flex-col items-center">
                <h1 className="text-2xl font-thin text-white">
                    Pokémon
                </h1>
                <h3 className="text-xl font-bold text-white">
                    #{counter} {pokemon?.name}
                </h3>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${counter}.png`}
                    alt={pokemon?.name}
                />

                <div className="flex gap-2">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                        handleClck={decrement}
                    >
                        Anterior
                    </button>

                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                        handleClck={increment}
                    >
                        Siguiente
                    </button>
                </div>
            </div>
        </>
    );
};
