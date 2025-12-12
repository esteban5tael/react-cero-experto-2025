import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import { UserCard } from "./components";
import { UserContext } from "@/contexts";
import { useContext } from "react";
import { Button } from "@/components/ui";
import { Link } from "react-router";

export const ProfilePage = () => {
    const { user } = useContext(UserContext);

    return (
        <div className="p-8">
            <Card>
                <CardHeader>
                    <CardTitle className="text-6xl font-bold text-center">
                        Profile Page
                    </CardTitle>
                </CardHeader>
            </Card>

            {user ? (
                <UserCard />
            ) : (
                <>
                    <hr className="my-10" />
                    <Link
                        to="/login"
                        className="text-sm text-blue-500 hover:underline"
                    >
                        <Button
                            className="w-full mt-2"
                            variant={"ghost"}
                        >
                            Go to Login
                        </Button>
                    </Link>
                </>
            )}
        </div>
    );
};
