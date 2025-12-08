import { MyLoader, NotFound ,PokemonCard} from "@/components";
import { useCounter, usePokemon } from "@/hooks";

export const PokemonPage = () => {
    const {
        //Props
        counter,
    } = useCounter(9);

    const { pokemon, isLoading } = usePokemon({ id: counter });
    
    if (isLoading) return <MyLoader />;

    if (!pokemon) 
        return <NotFound />;
    

    return <PokemonCard />;
};
