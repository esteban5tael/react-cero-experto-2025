import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export const LoginPage = () => {
    return (
        <div className="p-8">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-6xl font-bold text-center">
                        Login Page
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                            />
                        </div>
                        <div>
                            <Label htmlFor="password">Password</Label>
                            <Input
                                type="password"
                                id="password"
                                name="password"
                            />
                        </div>
                        <Button className="w-full cursor-pointer">Login</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};
