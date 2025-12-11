import { Navigate } from "react-router";

export const NotFoundPage = () => {
    return (
       <>
        <div className="min-h-screen flex items-center justify-center animate-pulse">
            <h1 className="text-8xl font-bold">
                404 - Page Not Found
            </h1>
        </div>

        <Navigate to="/" replace />
       </>
    );
};
