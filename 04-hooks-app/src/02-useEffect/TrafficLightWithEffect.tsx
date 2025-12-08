import { useEffect, useState } from "react";
interface Props {
    title: string;
}
const colors = {
    red: "bg-red-500 animate-pulse",
    yellow: "bg-yellow-500 animate-pulse",
    green: "bg-green-500 animate-pulse",
    undefined: "bg-gray-500",
};

// type TrafficLightColor = "red" | "yellow" | "green" | "";
type TrafficLightColor = keyof typeof colors | "";

export const TrafficLightWithEffect = ({ title }: Props) => {
    const [light, setLight] = useState<TrafficLightColor>("red");
    const [countDown, setCountDown] = useState(3);

    /* Coundown Effect */
    useEffect(() => {
        if (countDown === 0) return;

        const intervalId = setInterval(() => {
            setCountDown((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [countDown]);

    /* Change color effect */
    useEffect(() => {
        if (countDown === 0) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setCountDown(3);
            if (light === "red") {
                setLight("green");
                return;
            }

            if (light === "yellow") {
                setLight("red");
                return;
            }

            if (light === "green") {
                setLight("yellow");
                return;
            }

            return;
        }
    }, [countDown, light]);

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
                                width: `${(countDown / 3) * 100}%`,
                            }}
                        ></div>
                    </div>

                    <div
                        className={`w-32 h-32 ${
                            light === "green"
                                ? colors[light]
                                : "bg-gray-500"
                        } rounded-full`}
                    ></div>

                    <div
                        className={`w-32 h-32 ${
                            light === "yellow"
                                ? colors[light]
                                : "bg-gray-500"
                        } rounded-full`}
                    ></div>
                    <div
                        className={`w-32 h-32 ${
                            light === "red"
                                ? colors[light]
                                : "bg-gray-500 "
                        } rounded-full`}
                    ></div>
                </div>
            </div>
        </>
    );
};
