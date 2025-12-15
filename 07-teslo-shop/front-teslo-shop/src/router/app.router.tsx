import { createBrowserRouter, Navigate } from "react-router";
//
import { ShopLayout } from "@/shop/layouts";
import { HomePage, ProductPage, GenderPage } from "@/shop/pages";
//

import { LoginPage, RegisterPage } from "@/auth/pages";
//

import {
    DashboardPage,
    AdminProductsPage,
    AdminProductPage,
} from "@/admin/pages";
import { lazy } from "react";

const AuthLayout = lazy(() => import("@/auth/layouts/AuthLayout"));
// const ShopLayout=lazy(()=>import('@/shop/layouts/ShopLayout').then(module=>({default:module.ShopLayout})))
const AdminLayout = lazy(() => import("@/admin/layouts/AdminLayout"));

export const appRouter = createBrowserRouter([
    /* Rutas Publicas */
    {
        path: "/",
        element: <ShopLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "prpduct/:idSlug",
                element: <ProductPage />,
            },
            {
                path: "gender/:gender",
                element: <GenderPage />,
            },
        ],
    },
    /* Rutas de Auth */
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="/auth/login" />,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "register",
                element: <RegisterPage />,
            },
        ],
    },
    /* Rutas Admin */
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <DashboardPage />,
            },
            {
                path: "products",
                element: <AdminProductsPage />,
            },
            {
                path: "product/:idSlug",
                element: <AdminProductPage />,
            },
        ],
    },
    /*  */
    {
        path: "*",
        element: <Navigate to="/" />,
    },
]);
