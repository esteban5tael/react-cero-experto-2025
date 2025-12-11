import { Navigate } from "react-router";
import { Alert, AlertTitle } from "@/components/ui/alert";

export const NotFoundPage = () => {
    return (
        <>
            <div className="animate-pulse">
                <Alert>
                    <AlertTitle className="text-8xl font-bold">
                        404 - Page Not Found
                    </AlertTitle>
                </Alert>
            </div>
            <Navigate to="/" replace />
        </>
    );
};
