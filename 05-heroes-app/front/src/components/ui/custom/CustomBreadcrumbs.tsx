import { Link } from "react-router";
import { SlashIcon } from "lucide-react";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    // BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface Breadcrumb {
    label: string;
    to: string;
}

interface CustomBreadcrumbsProps {
    currentPage: string;
    breadcrumbs?: Breadcrumb[];
}

export const CustomBreadcrumbs = ({
    currentPage,
    breadcrumbs = [],
}: CustomBreadcrumbsProps) => {
    return (
        <>
            <Breadcrumb className="my-5 ml-2">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link
                                className="text-shadow-blue-600"
                                to="/"
                            >
                                Home
                            </Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    {breadcrumbs.map((bread) => (
                        <div className="flex items-center">
                            <BreadcrumbSeparator>
                                <SlashIcon />
                            </BreadcrumbSeparator>
                            <BreadcrumbItem key={bread.label}>
                                <BreadcrumbLink asChild>
                                    <Link
                                        className="text-shadow-blue-600"
                                        to={bread.to}
                                    >
                                        {bread.label}
                                    </Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </div>
                    ))}
                    <BreadcrumbSeparator>
                        <SlashIcon />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbLink className="cursor-none text-black font-extrabold">
                            {currentPage}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </>
    );
};
