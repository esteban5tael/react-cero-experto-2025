import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.router.tsx";
import { UserContextProvider } from "./contexts/";
import { Toaster } from "sonner";

export const App = () => {
    return (
        <>
            <Toaster duration={1100} position="top-right" />
            <UserContextProvider>
                <RouterProvider router={appRouter} />
            </UserContextProvider>
        </>
    );
};
