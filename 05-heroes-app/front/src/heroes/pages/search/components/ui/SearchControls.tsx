import {
    Button,
    Input,
    Slider,
    Accordion,
    AccordionContent,
    AccordionItem,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components";

import { Search, Plus, SortAsc, Grid, Filter } from "lucide-react";
import { useRef } from "react";
import { useSearchParams } from "react-router";

export const SearchControls = () => {
    //
    const [searchParams, setSearchParams] = useSearchParams();

    const inputSearchRef = useRef<HTMLInputElement>(null);

    const activeAccordion =
        searchParams.get("active-accordion") ?? "";

    const selectedTeam = searchParams.get("team") ?? "";
    const selectedCategory = searchParams.get("category") ?? "";
    const selectedUniverse = searchParams.get("universe") ?? "";
    const selectedStatus = searchParams.get("status") ?? "";
    const selectedStrength = Number(
        searchParams.get("strength") ?? 0
    );

    const setQueryParams = (name: string, value: string) => {
        if (value === "clear") {
            setSearchParams((prev) => {
                prev.delete(name);
                return prev;
            });
        } else {
            setSearchParams((prev) => {
                prev.set(name, value);
                return prev;
            });
        }
    };
    const handleSearchKeyDown = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key === "Enter") {
            const value = inputSearchRef.current?.value ?? "";
            setQueryParams("name", value);
        }
    };

    const handleFilterAccordionToggle = () => {
        if (activeAccordion === "advanced-filters") {
            /* searchParams.delete("active-accordion");
            setSearchParams(searchParams); */
            setSearchParams((prev) => {
                prev.delete("active-accordion");
                return prev;
            });
            return;
        }
        searchParams.set("active-accordion", "advanced-filters");
        setSearchParams(searchParams);
        return;
    };

    return (
        <>
            <div className="flex flex-col gap-4 mb-8">
                {/* Search */}
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                        ref={inputSearchRef}
                        className="pl-12 h-12 text-lg bg-white"
                        placeholder="Search heroes, villains, powers, teams..."
                        onKeyDown={(event) => {
                            handleSearchKeyDown(event);
                        }}
                        defaultValue={searchParams.get("name") ?? ""}
                    />
                </div>

                {/* Action buttons */}
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        className={`h-12 bg-transparent ${
                            activeAccordion === "advanced-filters"
                                ? "bg-gray-900 text-white"
                                : "bg-transparent"
                        } `}
                        onClick={() => handleFilterAccordionToggle()}
                    >
                        <Filter className="h-4 w-4 mr-2" />
                        Filters
                    </Button>

                    <Button
                        variant="outline"
                        className="h-12 bg-transparent"
                    >
                        <SortAsc className="h-4 w-4 mr-2" />
                        Sort by Name
                    </Button>

                    <Button
                        variant="outline"
                        className="h-12 bg-transparent"
                    >
                        <Grid className="h-4 w-4" />
                    </Button>

                    <Button className="h-12">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Character
                    </Button>
                </div>
                {/* Advanced Filters */}

                <Accordion
                    type="single"
                    collapsible
                    value={activeAccordion}
                >
                    <AccordionItem value="advanced-filters">
                        {/* <AccordionTrigger>
                            Is it accessible?
                        </AccordionTrigger> */}
                        <AccordionContent>
                            <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg font-semibold">
                                        Advanced Filters
                                    </h3>
                                    <Button
                                        variant="ghost"
                                        onClick={() => {
                                            setSearchParams(
                                                (prev) => {
                                                    prev.delete(
                                                        "name"
                                                    );
                                                    prev.delete(
                                                        "team"
                                                    );
                                                    prev.delete(
                                                        "category"
                                                    );
                                                    prev.delete(
                                                        "universe"
                                                    );
                                                    prev.delete(
                                                        "status"
                                                    );
                                                    prev.delete(
                                                        "strength"
                                                    );
                                                    return prev;
                                                }
                                            );
                                        }}
                                    >
                                        Clear All
                                    </Button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">
                                            Team
                                        </label>
                                        <Select
                                            value={selectedTeam}
                                            onValueChange={(value) =>
                                                setQueryParams(
                                                    "team",
                                                    value
                                                )
                                            }
                                        >
                                            <SelectTrigger className="h-10 w-full">
                                                <SelectValue placeholder="All teams" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="clear">
                                                    All teams
                                                </SelectItem>
                                                <SelectItem value="Justice League">
                                                    Justice League
                                                </SelectItem>
                                                <SelectItem value="Avengers">
                                                    Avengers
                                                </SelectItem>
                                                <SelectItem value="X-Men">
                                                    X-Men
                                                </SelectItem>
                                                <SelectItem value="Batfamily">
                                                    Batfamily
                                                </SelectItem>
                                                <SelectItem value="Teen Titans">
                                                    Teen Titans
                                                </SelectItem>
                                                <SelectItem value="Solo">
                                                    Solo
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">
                                            Category
                                        </label>
                                        <Select
                                            value={selectedCategory}
                                            onValueChange={(value) =>
                                                setQueryParams(
                                                    "category",
                                                    value
                                                )
                                            }
                                        >
                                            <SelectTrigger className="h-10 w-full">
                                                <SelectValue placeholder="All categories" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="clear">
                                                    All categories
                                                </SelectItem>
                                                <SelectItem value="Hero">
                                                    Hero
                                                </SelectItem>
                                                <SelectItem value="Villain">
                                                    Villain
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">
                                            Universe
                                        </label>
                                        <Select
                                            value={selectedUniverse}
                                            onValueChange={(value) =>
                                                setQueryParams(
                                                    "universe",
                                                    value
                                                )
                                            }
                                        >
                                            <SelectTrigger className="h-10 w-full">
                                                <SelectValue placeholder="All universes" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="clear">
                                                    All universes
                                                </SelectItem>
                                                <SelectItem value="DC">
                                                    DC
                                                </SelectItem>
                                                <SelectItem value="Marvel">
                                                    Marvel
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">
                                            Status
                                        </label>
                                        <Select
                                            value={selectedStatus}
                                            onValueChange={(value) =>
                                                setQueryParams(
                                                    "status",
                                                    value
                                                )
                                            }
                                        >
                                            <SelectTrigger className="h-10 w-full">
                                                <SelectValue placeholder="All statuses" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="clear">
                                                    All statuses
                                                </SelectItem>
                                                <SelectItem value="Active">
                                                    Active
                                                </SelectItem>
                                                <SelectItem value="Deceased">
                                                    Deceased
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label className="text-sm font-medium">
                                        Minimum Strength:{" "}
                                        {selectedStrength}/10
                                    </label>
                                    <Slider
                                        defaultValue={[
                                            selectedStrength,
                                        ]}
                                        onValueChange={(value) =>
                                            setQueryParams(
                                                "strength",
                                                value[0].toString()
                                            )
                                        }
                                        max={10}
                                        step={1}
                                    />
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </>
    );
};
