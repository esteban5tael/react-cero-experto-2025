import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components";


interface HeroStatCardProps extends React.PropsWithChildren {
    title: string;
    icon: React.ReactNode;
/*     mainStat: string;
    subText: string; */
}

export const HeroStatCard = ({title,icon,children}: HeroStatCardProps) => {
    return (
        <>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        {title}
                    </CardTitle>
                    {icon}
                </CardHeader>
                <CardContent>
                    {children}
                </CardContent>
            </Card>
        </>
    );
};
