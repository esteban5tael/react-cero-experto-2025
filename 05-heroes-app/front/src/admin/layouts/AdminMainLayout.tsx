import { Outlet } from "react-router";
import { AdminMainLayoutNavBar } from "./components";

export const AdminMainLayout = () => {
    return (
        <>
           <AdminMainLayoutNavBar />
            <Outlet />
        </>
    );
};

export default AdminMainLayout;