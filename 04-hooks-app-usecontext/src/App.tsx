import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.router.tsx";
import { UserContextProvider } from "./contexts/";

export const App = () => {
    return (
        <>
            <UserContextProvider>
                <RouterProvider router={appRouter} />
            </UserContextProvider>
        </>
    );
};
