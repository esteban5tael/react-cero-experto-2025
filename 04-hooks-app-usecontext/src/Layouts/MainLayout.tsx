import { Outlet } from "react-router";
import { NavBar } from "../components/";

export const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />
            <main className="flex-1 flex items-center justify-center">
                <Outlet />
            </main>
        </div>
    );
};
