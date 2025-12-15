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
import { FavoriteHeroProvider } from "./heroes/contexts";
//

const queryClient = new QueryClient();

export const App = () => {
    return (
        // Provide the client to your App
        <QueryClientProvider client={queryClient}>
            <FavoriteHeroProvider>
                <RouterProvider router={appRoutes} />

                <ReactQueryDevtools initialIsOpen={false} />
            </FavoriteHeroProvider>
        </QueryClientProvider>
    );
};

export default App;
