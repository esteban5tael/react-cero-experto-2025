import { lazy } from "react";
//
import { createBrowserRouter, Navigate } from "react-router";
//




//
// Lazy load pages for code splitting
const HeroesMainLayout = lazy(() => import('@/heroes/layouts/HeroesMainLayout').then(module => ({ default: module.HeroesMainLayout })));
const SearchPage = lazy(() => import('@/heroes/pages/search/SearchPage').then(module => ({ default: module.SearchPage })));
const HomePage = lazy(() => import('@/heroes/pages/home/HomePage').then(module => ({ default: module.HomePage })));
const HeroPage  = lazy(() => import('@/heroes/pages/hero/HeroPage').then(module => ({ default: module.HeroPage })));
// 
const AdminMainLayout = lazy(() => import('@/admin/layouts/AdminMainLayout').then(module => ({ default: module.AdminMainLayout })));
const  AdminPage = lazy(() => import('@/admin/pages/AdminPage').then(module => ({ default: module.AdminPage })));

export const appRoutes = createBrowserRouter([
    {
        path: "/",
        element: <HeroesMainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "hero/:idSlug",
                element: <HeroPage />,
            },
            {
                path: "search",
                 element: <SearchPage />,
            },
            {
                path:"*",
                element:<Navigate to={"/"}/>
            }
        ],
    },
    {
        path: "/admin",
        element: <AdminMainLayout />,
        children: [
            {
                index: true,
                element: <AdminPage />,
            },
        ],
    },
    {
        path: "*",
        element: <HomePage />,
    },
]);
