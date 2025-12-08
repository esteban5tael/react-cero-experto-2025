import { useState } from "react";
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

export const TrafficLight = ({ title }: Props) => {
    const [loading, setLoading] = useState(false);
    const [light, setLight] = useState<TrafficLightColor>("");

    const handleColorChange = (color: TrafficLightColor) => {
        setLoading(true);

        // Simular una operación asincrónica
        setTimeout(() => {
            setLoading(false);
        }, 1000);

        setLight((prev) => {
            if (prev === color) return "";
            return color;
        });
    };

    return (
        <>
            <h1 className="text-center">{title}</h1>

            <div className="min-h-screen bg-linear-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
                <div className="flex flex-col items-center space-y-8">
                    <div
                        className={`w-32 h-32 ${
                            light === "red"
                                ? colors[light]
                                : "bg-gray-500 "
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
                            light === "green"
                                ? colors[light]
                                : "bg-gray-500"
                        } rounded-full`}
                    ></div>

                    {/* Botón para cambiar el estado de la luz */}
                    <div className="flex gap-2">
                        <button
                            className={`bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer ${
                                loading && light === "red"
                                    ? "animate-spin"
                                    : ""
                            }`}
                            onClick={() => handleColorChange("red")}
                        >
                            Rojo
                        </button>
                        <button
                            className={`bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer ${
                                loading && light === "yellow"
                                    ? "animate-spin"
                                    : ""
                            }`}
                            onClick={() =>
                                handleColorChange("yellow")
                            }
                        >
                            Amarillo
                        </button>
                        <button
                            className={`bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer ${
                                loading && light === "green"
                                    ? "animate-spin"
                                    : ""
                            }`}
                            onClick={() => handleColorChange("green")}
                        >
                            Verde
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
