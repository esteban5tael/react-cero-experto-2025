import { RouterProvider } from "react-router";
import { appRouter } from "./router/";

export const App = () => {
    return (
        <>
            <RouterProvider router={appRouter} />
        </>
    );
};

export default App;
