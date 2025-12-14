import {
    createContext,
    useState,
    type PropsWithChildren,
} from "react";
import type { HeroInterface } from "../interfaces";

interface IFavoriteHeroContext {
    // State
    favorites: HeroInterface[];
    favoritesCount: number;

    // Methods
    isFavorite: (hero: HeroInterface) => boolean;
    toggleFavorite: (hero: HeroInterface) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const FavoriteHeroContext =
    createContext<IFavoriteHeroContext>({} as IFavoriteHeroContext);

export const FavoriteHeroProvider = ({
    children,
}: PropsWithChildren) => {
    const [favorites, setFavorites] = useState<HeroInterface[]>([]);

    const toogleFavorite = (hero: HeroInterface) => {
        const heroExists = favorites.find(
            (fav) => fav.id === hero.id
        );

        if (heroExists) {
            const newFavorites = favorites.filter(
                (fav) => fav.id !== hero.id
            );
            setFavorites(newFavorites);
            return;
        }

        setFavorites([...favorites, hero]);
    };

    return (
        <FavoriteHeroContext
            value={{
                // State
                favoritesCount: 0,
                favorites: [],
                // Methods
                toggleFavorite: toogleFavorite,
                isFavorite: () => {},
            }}
        >
            {children}
        </FavoriteHeroContext>
    );
};
