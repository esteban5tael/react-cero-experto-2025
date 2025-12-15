import { CustomPagination } from "@/components";
import { products } from "@/data";
import { ProductsGrid } from "@/shop/components";
import { CustomJumbotron } from "@/shop/layouts/components";

export const HomePage = () => {
    return (
        <>
            <CustomJumbotron title="Estilo Tesla" />

            <ProductsGrid products={products} />

            <CustomPagination totalPages={5} />
        </>
    );
};

export default HomePage;
