import { useRef, useState } from "react";

export const FocusScreen = () => {
    const [inputTextValue, setinputTextValue] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        setinputTextValue(inputRef.current?.value || "");

        inputRef.current?.select();

        inputRef.current?.focus();
    };

    return (
        <>
            <div>
                <h1 className="text-center text-3xl font-thin">
                    Focus Screen
                </h1>
                <input
                    ref={inputRef}
                    type="text"
                    className="bg-white text-balance text-black p-1 m-1 rounded-md"
                    autoFocus
                />
                <hr className="m-2" />
                <button
                    className="button"
                    type="button"
                    onClick={handleClick}
                >
                    Set Focus
                </button>
                <hr />
                <div className="bg-gray-700 text-center">
                    {inputTextValue}
                </div>
            </div>
        </>
    );
};
