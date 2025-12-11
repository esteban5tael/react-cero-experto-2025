import { createBrowserRouter } from "react-router";
import { AboutPage, LoginPage, ProfilePage,NotFoundPage } from "./../pages";

export const appRouter = createBrowserRouter([

    {
        path: "/",
        element: <AboutPage />,
    },
    {
        path: "/profile",
        element: <ProfilePage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);
