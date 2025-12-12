import { Outlet } from "react-router";
import { HeroesMainLayoutNavBar } from "./components/HeroesMainLayoutNavBar";

export const HeroesMainLayout = () => {
    return (
        <>
            <HeroesMainLayoutNavBar />
            <Outlet />
        </>
    );
};

export default HeroesMainLayout;
