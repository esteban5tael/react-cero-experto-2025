import { FocusScreen } from "./01-useRef/FocusScreen";
import { TrafficLight } from "./01-useState";
import {
    TrafficLightWithHook,
    TrafficLightWithEffect,
} from "./02-useEffect";
import { PokemonPage } from "./03-examples";
import { TasksApp } from "./05-useReducer/TaskApp";


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
                        <FocusScreen />
                    </>
                )}
                <TasksApp />
            </div>
        </>
    );
};
