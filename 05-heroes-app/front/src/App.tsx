import { RouterProvider } from "react-router";
//
import {
    /*     useQuery,
    useMutation,
    useQueryClient, */
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
//
import { appRoutes } from "./router";
//

const queryClient = new QueryClient();

export const App = () => {
    return(

    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={appRoutes} />
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>);
};

export default App;
