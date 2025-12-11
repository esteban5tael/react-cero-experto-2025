import { Link } from "react-router";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const NavBar = () => {
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
                                <Link
                                    to="/login"
                                    className="text-white px-4 py-2 rounded hover:bg-slate-600 transition-colors"
                                >
                                    Login
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </nav>
    );
};
