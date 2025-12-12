import { use, type JSX } from "react";
import { UserContext } from "@/contexts";
import { Navigate } from "react-router";

interface Props {
    element: JSX.Element;
}
export const PrivateRoutes = ({ element }: Props) => {
    const { authStatus } = use(UserContext);

    if (authStatus === "checking")
        return <Navigate to="/login" replace />;

    if (authStatus === "not-authenticated")
        return <Navigate to="/login" replace />;

    return <>{element}</>;
};
