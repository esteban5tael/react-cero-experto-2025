import { useRef } from "react";
import { Search } from "lucide-react";
import { Button, Input, CustomLogo } from "@/components";
import { Link, useParams, useSearchParams } from "react-router";

export const CustomHeader = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const inputSearchRef = useRef<HTMLInputElement>(null);

    const query = searchParams.get("query") || "";

    const { gender } = useParams();

    const activeGenderClass: string =
        "text-sm font-medium transition-colors hover:text-primary bg-gray-300 rounded";

    const handleInputSearchKeyDown = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key === "Enter") {
            const queryValue = inputSearchRef.current?.value.trim();

            if (!queryValue) {
                searchParams.delete("query");
                setSearchParams(searchParams);
                return;
            }

            const newSearchParams = new URLSearchParams();
            newSearchParams.set("viewMode", "grid");
            newSearchParams.set("query", queryValue);
            newSearchParams.set("page", "1"); //TODO: Remove when pagination is implemented
            setSearchParams(newSearchParams);
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b backdrop-blur bg-slate-50">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    
                        <CustomLogo />

                    {/* Navigation - Desktop */}
                    <nav className="hidden md:flex items-center space-x-8 ml-1">
                        <Link
                            to="/"
                            className={`text-sm font-medium transition-colors hover:text-primary p-0.5 ${
                                gender === undefined
                                    ? activeGenderClass
                                    : ""
                            }`}
                        >
                            Todos
                        </Link>
                        <Link
                            to="gender/men"
                            className={`text-sm font-medium transition-colors hover:text-primary p-0.5 ${
                                gender === "men"
                                    ? activeGenderClass
                                    : ""
                            }`}
                        >
                            Hombres
                        </Link>
                        <Link
                            to="gender/women"
                            className={`text-sm font-medium transition-colors hover:text-primary p-0.5 ${
                                gender === "women"
                                    ? activeGenderClass
                                    : ""
                            }`}
                        >
                            Mujeres
                        </Link>
                        <Link
                            to="gender/kid"
                            className={`text-sm font-medium transition-colors hover:text-primary p-0.5 ${
                                gender === "kid"
                                    ? activeGenderClass
                                    : ""
                            }`}
                        >
                            Niños
                        </Link>
                    </nav>

                    {/* Search and Cart */}
                    <div className="flex items-center space-x-4">
                        <div className="hidden md:flex items-center space-x-2">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                <Input
                                    ref={inputSearchRef}
                                    placeholder="Buscar productos..."
                                    className="pl-9 w-64 h-9 bg-white shadow-2xl"
                                    onKeyDown={(e) =>
                                        handleInputSearchKeyDown(e)
                                    }
                                    defaultValue={query}
                                />
                            </div>
                        </div>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                        >
                            <Search className="h-5 w-5" />
                        </Button>

                        <Link to={"/auth/login"}>
                            <Button
                                variant="default"
                                size="sm"
                                className="ml-0.5"
                            >
                                Login
                            </Button>
                        </Link>
                        <Link to={"/admin"}>
                            <Button
                                variant="outline"
                                size="sm"
                                className="0.5"
                            >
                                Admin
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};
