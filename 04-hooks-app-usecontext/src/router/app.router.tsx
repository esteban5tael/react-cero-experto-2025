import { createBrowserRouter } from "react-router";
import { MainLayout } from "../Layouts";
import {
    AboutPage,
    LoginPage,
    ProfilePage,
    NotFoundPage,
} from "../pages";
import { PrivateRoutes } from "./PrivateRoutes";

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />, // Layout padre
        children: [
            {
                path: "/", // Página principal
                element: <AboutPage />,
            },
            {
                path: "/profile",
                element: <PrivateRoutes element={<ProfilePage />} />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "*", // Página 404
                element: <NotFoundPage />,
            },
        ],
    },
]);
