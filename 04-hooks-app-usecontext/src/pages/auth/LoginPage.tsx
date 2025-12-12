import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useContext, useState,useEffect } from "react";
import { UserContext } from "@/contexts";
import { toast } from "sonner";

interface LoginInfo {
    email: string;
    password: string;
}

export const LoginPage = () => {

    
    const [loginInfo, setLoginInfo] = useState<LoginInfo>({
        email: "ana.garcia@email.com",
        password: "12345678",
    });

    const { user,login } = useContext(UserContext);

    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const success = login(loginInfo.email);

        if (!success) {
            toast.error("Invalid email or password");
            return;
        }
        toast.success("Login successful");

        navigate("/profile");
    };

    useEffect(() => {
      if (user) {
        navigate("/profile");
      }
    }, [user, navigate])
    

    return (
        <>
            <div className="p-8">
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle className="text-6xl font-bold text-center">
                            Login Page
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form
                            className="space-y-4"
                            onSubmit={(event) => handleSubmit(event)}
                        >
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={loginInfo.email}
                                    onChange={(e) =>
                                        setLoginInfo({
                                            ...loginInfo,
                                            email: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div>
                                <Label htmlFor="password">
                                    Password
                                </Label>
                                <Input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={loginInfo.password}
                                    onChange={(e) =>
                                        setLoginInfo({
                                            ...loginInfo,
                                            password: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div>
                                <Button className="w-full cursor-pointer">
                                    Login
                                </Button>
                                <hr />
                                <Link
                                    to="/"
                                    className="text-sm text-blue-500 hover:underline"
                                >
                                    <Button
                                        className="w-full mt-2"
                                        variant={"ghost"}
                                    >
                                        Go to Home
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </>
    );
};
