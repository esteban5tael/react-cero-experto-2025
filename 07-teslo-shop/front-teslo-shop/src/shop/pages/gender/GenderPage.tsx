import { CustomPagination } from "@/components";
import { products } from "@/data";
import { ProductsGrid } from "@/shop/components";
import { CustomJumbotron } from "@/shop/layouts/components";
import { useParams } from "react-router";

export const GenderPage = () => {
    const GENDER_CONFIG = {
        men: {
            title: "Estilo Tesla para Hombres",
            subtitle:
                "Descubre nuestra colección exclusiva para hombres.",
        },
        women: {
            title: "Estilo Tesla para Mujeres",
            subtitle: "Explora la moda Tesla diseñada para mujeres.",
        },
        kid: {
            title: "Estilo Tesla para Niños",
            subtitle: "Ropa Tesla para los más pequeños de la casa.",
        },
    } as const;

    const DEFAULT_CONFIG = {
        title: "Todos los Productos",
        subtitle:
            "Encuentra todo lo que necesitas en nuestra tienda.",
    };

    const { gender } = useParams();

    const config =
        gender && gender in GENDER_CONFIG
            ? GENDER_CONFIG[gender as keyof typeof GENDER_CONFIG]
            : DEFAULT_CONFIG;

    return (
        <>
            <CustomJumbotron
                title={config.title}
                subtitle={config.subtitle}
            />

            <ProductsGrid products={products} />

            <CustomPagination totalPages={7} />
        </>
    );
};

export default GenderPage;
