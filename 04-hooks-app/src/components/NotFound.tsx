interface NotFoundProps {
    title?: string;
    message?: string;
    icon?: string;
}

export const NotFound = ({
    title = "Not Found",
    message = "Sorry, we couldn't find what you're looking for.",
    icon = "🔍",
}: NotFoundProps) => {
    return (
        <div className="flex flex-col items-center justify-center h-64 text-center">
            <div className="text-6xl mb-4 animate-spin">{icon}</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {title}
            </h2>
            <p className="text-gray-600">{message}</p>
        </div>
    );
};
