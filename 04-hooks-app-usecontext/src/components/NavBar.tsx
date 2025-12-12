import { Link, useNavigate } from "react-router";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { use } from "react";
import { UserContext } from "@/contexts";
import { Button } from "./ui";

export const NavBar = () => {
    const { user, logout } = use(UserContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        // Logic for logging out the user
        logout();
        navigate("/login");
        console.log("User logged out");
    };

    return (
        <nav className="bg-slate-700 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <Link
                    to="/"
                    className="text-white text-xl font-bold hover:text-gray-300 transition-colors"
                >
                    My App
                </Link>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link
                                    to="/"
                                    className="text-white px-4 py-2 rounded hover:bg-slate-600 transition-colors"
                                >
                                    Home
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        {user && (
                            <>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            to="/profile"
                                            className="text-white px-4 py-2 rounded hover:bg-slate-600 transition-colors"
                                        >
                                            Profile
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Button
                                            className="text-white px-4 py-2 rounded hover:bg-slate-600 transition-colors"
                                            variant="link"
                                            onClick={handleLogout}
                                        >
                                            Logout
                                        </Button>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </>
                        )}
                        {!user && (
                            <>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            to="/login"
                                            className="text-white px-4 py-2 rounded hover:bg-slate-600 transition-colors"
                                        >
                                            Login
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </>
                        )}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </nav>
    );
};
