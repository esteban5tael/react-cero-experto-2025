export const MyLoader = () => {
    return (
        <div className="bg-gradient flex flex-col items-center animate-pulse">
            <div className="h-8 bg-slate-700 rounded w-32 mb-4"></div>
            <div className="h-6 bg-slate-700 rounded w-48 mb-4"></div>
            <div className="h-32 w-32 bg-slate-700 rounded-full mb-4"></div>
            <div className="flex gap-2">
                <div className="h-10 bg-slate-700 rounded w-24"></div>
                <div className="h-10 bg-slate-700 rounded w-24"></div>
            </div>
        </div>
    );
};
