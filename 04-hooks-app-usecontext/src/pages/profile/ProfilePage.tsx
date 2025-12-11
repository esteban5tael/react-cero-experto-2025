import { Button } from "@/components/ui";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export const ProfilePage = () => {

    const handleLogout = () => {
        // Logic for logging out the user
        console.log("User logged out");
    }

    return (
        <div className="p-8">
            <Card>
                <CardHeader>
                    <CardTitle className="text-6xl font-bold text-center">
                        Profile Page
                    </CardTitle>
                </CardHeader>
            </Card>
            <div className="my-5 flex justify-center gap-4">
                <Button
                    className="bg-secondary text-secondary-foreground hover:bg-gray-900"
                    variant="outline"
                    onClick={handleLogout}
                >
                    Secondary Outline
                </Button>
            </div>
        </div>
    );
};
