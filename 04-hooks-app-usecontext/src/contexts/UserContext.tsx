import { users } from "@/data";
import type { UserInterface } from "@/interfaces";
import {
    createContext,
    useState,
    type PropsWithChildren,
} from "react";

type AuthStatus = "authenticated" | "not-authenticated" | "checking";

interface UserContextProps {
    // state
    authStatus: AuthStatus;
    user: UserInterface | null;

    // methods
    login: (email: string) =>boolean;
    register: (
        name: string,
        email: string,
        password: string
    ) => UserInterface | void;
    logout: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext({} as UserContextProps);

export const UserContextProvider = ({
    children,
}: PropsWithChildren) => {
    const [authStatus, setAuthStatus] =
        useState<AuthStatus>("checking");

    const [user, setUser] = useState<UserInterface | null>(null);

    const clearUserData=()=>{
        setAuthStatus("not-authenticated");
        setUser(null);

    }

    const handleLogin = (email: string) => {
        const user:UserInterface=users.find(user=>user.contact.email===email)!;

        if(!user) {
            clearUserData();
            console.log("Login failed for email: ", email);
            return false;
        };

        setUser(user);
        setAuthStatus("authenticated");
        console.log("User Logged in: ", user);
        return true
    };

    const handleRegister = (
        name: string,
        email: string,
        password: string
    ) => {
        console.log("User Registering: ", { name, email, password });
    };

    const handleLogout = () => {
        clearUserData();
        console.log("User Logged out");
    };

    return (
        <UserContext
            value={{
                authStatus: authStatus,
                user: user,
                login: handleLogin,
                register: handleRegister,
                logout: handleLogout,
            }}
        >
            {children}{" "}
        </UserContext>
    );
};
