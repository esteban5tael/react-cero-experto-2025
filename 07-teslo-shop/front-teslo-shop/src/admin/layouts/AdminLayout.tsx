import { useState } from "react";
import { AdminLayoutHeader, Sidebar } from "./components";

export const AdminLayout = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    return (
        <>
            <div className="min-h-screen bg-gray-50 flex">
                <Sidebar
                    isCollapsed={sidebarCollapsed}
                    onToggle={() =>
                        setSidebarCollapsed(!sidebarCollapsed)
                    }
                />

                <div className="flex-1 flex flex-col">
                    <AdminLayoutHeader />

                    <main className="flex-1 p-6"></main>
                </div>
            </div>
        </>
    );
};

export default AdminLayout;
