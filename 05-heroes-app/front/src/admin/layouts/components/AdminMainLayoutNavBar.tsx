import { Button } from "@/components";
import { Link } from "react-router";

export const AdminMainLayoutNavBar = () => {
    return (
        <>
            <nav className="bg-black rounded-2xl ">
                <div className="flex justify-between">
                    <div className="flex gap-4">
                        <Button
                            asChild
                            variant="ghost"
                            className="text-white hover:text-gray-300"
                        >
                            <Link to="/">Home</Link>
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
        </>
    );
};
