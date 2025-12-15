import {
    createContext,
    useEffect,
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

const getFavoritesFromLocalStorage = (): HeroInterface[] => {
    if (typeof window === "undefined") return [];
    const favorites = localStorage.getItem("favoriteHeroes");
    return favorites ? JSON.parse(favorites) : [];
};

const setFavoritesToLocalStorage = (favorites: HeroInterface[]) => {
    if (typeof window === "undefined") return;
    localStorage.setItem("favoriteHeroes", JSON.stringify(favorites));
};

export const FavoriteHeroProvider = ({
    children,
}: PropsWithChildren) => {
    const [favorites, setFavorites] = useState<HeroInterface[]>(
        getFavoritesFromLocalStorage()
    );

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

    const isFavorite = (hero: HeroInterface) => {
        return favorites.some((fav) => fav.id === hero.id);
    };

    useEffect(() => {
        setFavoritesToLocalStorage(favorites);
    }, [favorites]);

    return (
        <FavoriteHeroContext
            value={{
                // State
                favoritesCount: favorites.length,
                favorites,
                // Methods
                toggleFavorite: toogleFavorite,
                isFavorite: isFavorite,
            }}
        >
            {children}
        </FavoriteHeroContext>
    );
};
