import { Outlet } from "react-router";
import { HeroesMainLayoutNavBar } from "./components/HeroesMainLayoutNavBar";

export const HeroesMainLayout = () => {
    return (
        <>
            <div className="min-h-screen bg-linear-to-br from-blue-50 to-purple-50 p-4 ">
                <div className="max-w-7xl mx-auto">
                    <HeroesMainLayoutNavBar />
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default HeroesMainLayout;
