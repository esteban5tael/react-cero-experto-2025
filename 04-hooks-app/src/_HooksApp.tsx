import { FocusScreen } from "./01-useRef/FocusScreen";
import { TrafficLight } from "./01-useState";
import {
    TrafficLightWithHook,
    TrafficLightWithEffect,
} from "./02-useEffect";
import { PokemonPage } from "./03-examples";

const mustShow: boolean = false;
export const HooksApp = () => {
    return (
        <>
            <div className="bg-gradient">
                {mustShow && (
                    <>
                        <TrafficLight title="Traffic Light With useState" />
                        <TrafficLightWithEffect title="Traffic Light With useState and useEffect" />
                        <TrafficLightWithHook title="Traffic Light With Hook" />
                        <PokemonPage />
                    </>
                )}
                <FocusScreen />
            </div>
        </>
    );
};
