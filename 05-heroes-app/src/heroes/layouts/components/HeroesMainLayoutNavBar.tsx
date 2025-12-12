import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export const HeroesMainLayoutNavBar = () => {
    return (
        <nav className="bg-slate-900 rounded-2xl ">
            <div className="flex justify-between">
                <div className="flex gap-4">
                    <Button
                        asChild
                        variant="ghost"
                        className="text-white hover:text-gray-300"
                    >
                        <Link to="/">Home</Link>
                    </Button>
                    <Button
                        asChild
                        variant="ghost"
                        className="text-white hover:text-gray-300"
                    >
                        <Link to="/search">Search</Link>
                    </Button>
                </div>
                <Button
                    asChild
                    variant="ghost"
                    className="text-white hover:text-gray-300"
                >
                    <Link to="/admin">Admin</Link>
                </Button>
            </div>
        </nav>
    );
};
