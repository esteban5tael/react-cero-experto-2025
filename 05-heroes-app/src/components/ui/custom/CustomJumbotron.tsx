interface CustomJumbotronProps {
    title: string;
    description?: string;
}

export const CustomJumbotron = ({
    title,
    description,
}: CustomJumbotronProps) => {
    return (
        <>
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    {title}
                </h1>
                {description && (
                    <p className="text-gray-600">{description}</p>
                )}
            </div>
        </>
    );
};
