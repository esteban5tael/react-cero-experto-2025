import { RouterProvider } from "react-router";
//
import { appRoutes } from "./router";
//

export const App = () => {
    return <RouterProvider router={appRoutes} />;
};

export default App;
