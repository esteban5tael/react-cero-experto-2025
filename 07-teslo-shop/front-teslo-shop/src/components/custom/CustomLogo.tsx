import { Link } from "react-router";

interface ICustomLogoProps {
    subtitle?: string;
}

export const CustomLogo = ({
    subtitle = "Shop",
}: ICustomLogoProps) => {
    return (
        <>
            <Link
                to="/"
                className="flex items-center whitespace-nowrap text-sm font-thin md:text-base md:font-normal lg:text-lg lg:font-medium"
            >
                <span className="font-montserrat font-bold m-0 whitespace-nowrap text-lg md:text-xl lg:text-2xl">
                    Teslo |
                </span>
                <p className="text-muted-foreground m-0 px-2 whitespace-nowrap text-sm md:text-base lg:text-lg">
                    {subtitle}
                </p>
            </Link>
        </>
    );
};

export default CustomLogo;
