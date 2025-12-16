import { CustomPagination } from "@/components";
import { products } from "@/data";
import { ProductsGrid } from "@/shop/components";
import { CustomJumbotron } from "@/shop/layouts/components";

export const HomePage = () => {
    return (
        <>
            <CustomJumbotron title="Todos los Productos" />

            <ProductsGrid products={products} />

            <CustomPagination totalPages={7} />
        </>
    );
};

export default HomePage;
