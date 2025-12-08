import { colors } from "@/data";
import type { TrafficLightColor } from "@/types";
import { useState, useEffect } from "react";

export const useTrafficLight = () => {
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
    return {
        //Props
        // light,
        countDown,

        //Calculated
        percentage: (countDown / 3) * 100,
        greenLight: light === "green" ? colors.green : "bg-gray-500",
        yellowLight:
            light === "yellow" ? colors.yellow : "bg-gray-500",
        redLight: light === "red" ? colors.red : "bg-gray-500",

        //Methods
    };
};
