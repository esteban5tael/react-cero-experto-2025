
import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.router.tsx";

export const App = () => {
    return (
        <>
            
        <RouterProvider router={appRouter} />
        </>
    );
};
