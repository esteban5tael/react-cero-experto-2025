import { useState } from "react";


interface Props {
    title: string;
    quantity: number | undefined;
}
export const ItemCounter = ({ title,quantity }: Props) => {
   
    const initialCountValue: number = 0;
    const [count, setCount] = useState(quantity ?? initialCountValue);

    const addCount = () => {
        setCount(count + 1);
        
    };

    const subCount = () => {
        if (count === 0) return;
        setCount(count - 1);
        
    };

    const resetCount = () => {
        setCount(initialCountValue);
        
    };

    return (
        <>
            <div className="border-2 border-black rounded-lg p-1 m-0.5">
                <div>
                    <h1>{title}</h1>
                    <button
                        className={`text-2xl font-extrabold ${
                            count < 0
                                ? "button-danger"
                                : count > 10
                                ? "button-warning"
                                : "button"
                        }`}
                    >
                        {count }
                    </button>
                </div>
                <div className="flex gap-5">
                    <button className="button" onClick={subCount}>
                        -1
                    </button>
                    <button
                        className={"button"}
                        onClick={resetCount}
                        disabled={count === initialCountValue}
                    >
                        Reset
                    </button>
                    <button className="button" onClick={addCount}>
                        +1
                    </button>
                </div>
            </div>
        </>
    );
};
