import { Button } from "@/components/ui";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { UserContext } from "@/contexts";
import { useContext } from "react";
import { useNavigate } from "react-router";

export const UserCard = () => {
    const { user, logout } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
        console.log("User logged out");
    };

    if (!user) return null;

    return (
        <div className="space-y-6">
            {/* Header Card */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl font-bold">
                        {user.name}
                    </CardTitle>
                    <p className="text-lg text-muted-foreground">
                        {user.title}
                    </p>
                </CardHeader>
                <CardContent>
                    <p className="text-sm">{user.about}</p>
                </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
                <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div>
                        <Label className="font-semibold">
                            Email:
                        </Label>
                        <p>{user.contact.email}</p>
                    </div>
                    <div>
                        <Label className="font-semibold">
                            Phone:
                        </Label>
                        <p>{user.contact.phone}</p>
                    </div>
                    <div>
                        <Label className="font-semibold">
                            Location:
                        </Label>
                        <p>{user.contact.location}</p>
                    </div>
                    <div>
                        <Label className="font-semibold">
                            Website:
                        </Label>
                        <a
                            href={user.contact.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            {user.contact.website}
                        </a>
                    </div>
                    <div>
                        <Label className="font-semibold">
                            Joined:
                        </Label>
                        <p>{user.contact.joined}</p>
                    </div>
                </CardContent>
            </Card>

            {/* Skills */}
            <Card>
                <CardHeader>
                    <CardTitle>Skills</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2">
                        {user.skills.map((skill, index) => (
                            <span
                                key={index}
                                className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Experience */}
            <Card>
                <CardHeader>
                    <CardTitle>Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {user.experience.map((exp, index) => (
                        <div key={index}>
                            <h4 className="font-semibold">
                                {exp.role} at {exp.company}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                {exp.period}
                            </p>
                            <p className="text-sm">
                                {exp.description}
                            </p>
                            {index < user.experience.length - 1 && (
                                <Separator className="mt-4" />
                            )}
                        </div>
                    ))}
                </CardContent>
            </Card>

            {/* Stats */}
            <Card>
                <CardHeader>
                    <CardTitle>Stats</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                            <p className="text-2xl font-bold">
                                {user.stats.projects}
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Projects
                            </p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold">
                                {user.stats.connections}
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Connections
                            </p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold">
                                {user.stats.reviews}
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Reviews
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Tags */}
            <Card>
                <CardHeader>
                    <CardTitle>Tags</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2">
                        {user.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Logout Button */}
            <div className="flex justify-center">
                <Button
                    className="bg-secondary text-secondary-foreground hover:bg-gray-900"
                    variant="outline"
                    onClick={handleLogout}
                >
                    Logout
                </Button>
            </div>
        </div>
    );
};
