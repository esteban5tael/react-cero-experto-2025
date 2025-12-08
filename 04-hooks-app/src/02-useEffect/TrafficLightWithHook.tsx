import { useTrafficLight } from "@/hooks";
interface Props {
    title: string;
}

export const TrafficLightWithHook = ({ title }: Props) => {
    const {
        countDown,
        percentage,
        greenLight,
        yellowLight,
        redLight,
    } = useTrafficLight();

    return (
        <>
            <div className="min-h-screen bg-linear-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
                <div className="flex flex-col items-center space-y-8">
                    <h1 className=" text-center font-thin">
                        {title}
                    </h1>
                    <h2 className="text-xl">
                        Countdown: {countDown}{" "}
                    </h2>

                    <div className="w-64 bg-gray-700 rounded-full h-2">
                        <div
                            className="bg-blue-500 h-2 rounded-full transition-all duration-500 ease-linear"
                            style={{
                                width: `${percentage}%`,
                            }}
                        ></div>
                    </div>

                    <div
                        className={`w-32 h-32 rounded-full ${greenLight} `}
                    ></div>

                    <div
                        className={`w-32 h-32 rounded-full ${yellowLight} `}
                    ></div>
                    <div
                        className={`w-32 h-32 rounded-full ${redLight}`}
                    ></div>
                </div>
            </div>
        </>
    );
};
