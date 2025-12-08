import { TrafficLight } from "./01-useState";
import { TrafficLightWithEffect } from "./02-useEffect/TrafficLightWithEffect";
const mustShow: boolean = false;
export const HooksApp = () => {
    return (
        <>
            <div className="bg-gradient">
                {mustShow && <TrafficLight title="Traffic Light With useState" />}
                <TrafficLightWithEffect title="Traffic Light With useState and useEffect" />
            </div>
        </>
    );
};
