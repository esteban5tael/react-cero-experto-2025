import { Outlet } from "react-router";
import { CustomHeader} from "@/shop/layouts/components";
import CustomFooter from "./components/ui/CustomFooter";

export const ShopLayout = () => {
    return (
        <>
            <div className="min-h-screen bg-background">
                <CustomHeader />
                
                <Outlet />

                <CustomFooter />
            </div>
        </>
    );
};

export default ShopLayout;
