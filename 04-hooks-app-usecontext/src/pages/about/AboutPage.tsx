import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export const AboutPage = () => {
    return (
        <div className="flex flex-col items-center p-8">
            <Card className="max-w-2xl">
                <CardHeader>
                    <CardTitle className="text-6xl font-bold text-center">
                        About Me
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                    <p className="text-lg">
                        Hi, I'm a passionate web developer with a love
                        for creating interactive and user-friendly
                        applications. I specialize in React,
                        TypeScript, and modern web technologies to
                        build scalable solutions.
                    </p>
                    <p className="text-lg">
                        When I'm not coding, I enjoy exploring new
                        technologies, reading about software
                        architecture, and contributing to open-source
                        projects. Let's build something amazing
                        together!
                    </p>
                </CardContent>
            </Card>
        </div>
    );
};
