import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components";

import { Link, useLocation } from "react-router";
import { cn } from "../../../lib/utils";

export const HeroesMainLayoutNavBar = () => {
    const { pathname } = useLocation();

    const isActive = (path: string) => {
        return pathname === path;
    };

    return (
        <>
            <NavigationMenu>
                <NavigationMenuList>
                    {/* Home */}
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            asChild
                            className={cn(
                                isActive("/") &&
                                    "bg-slate-200 rounded-md p-2"
                            )}
                        >
                            <Link to="/">Home</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    {/* Home */}
                    {/* Search */}
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            asChild
                            className={cn(
                                isActive("/search") &&
                                    "bg-slate-200 rounded-md p-2"
                            )}
                        >
                            <Link to="/search">
                                Search Super Heroes
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    {/* Search */}
                </NavigationMenuList>
            </NavigationMenu>
        </>
    );
};
