import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components";

import { Link } from "react-router";

export const HeroesMainLayoutNavBar = () => {
    return (
        <>
            <NavigationMenu>
                <NavigationMenuList>
                    {/* Home */}
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link to="/">Home</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    {/* Home */}
                    {/* Search */}
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link to="/search">Search Super Heroes</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    {/* Search */}
                </NavigationMenuList>
            </NavigationMenu>
        </>
    );
};
