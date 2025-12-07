import { useState, type CSSProperties } from "react";

export const MyAwesome = () => {
    const firstName: string = "Juan Esteban";
    const lastName: string = "Benjumea Correa";
    const favoriteGames: readonly string[] = [
        "Metal Gear",
        "Death Stranding",
        "Cyberpunk 2077",
    ];

    const dbzCharacter: {
        name: string;
        age: number;
        isAlive: boolean;
        bgColor: string;
    } = {
        name: "Majin Vegeta",
        age: 48,
        isAlive: false,
        bgColor: "purple",
    };

    const [isActive, setIsActive] = useState(false);

    const toggleActive = (): void => {
        setIsActive(!isActive);
    };

    const myStyle: CSSProperties= {
        backgroundColor: isActive ? dbzCharacter.bgColor : undefined,
        borderRadius: isActive ? "20px" : "0px",
    };
    return (
        <>
            <h1
                style={{
                    backgroundColor: "blue",
                }}
            >
                {firstName}
            </h1>
            <h5>{lastName}</h5>
            <hr />
            <p>{favoriteGames.join(", ")}</p>
            <hr />
            <p>{2 + 2}</p>
            <hr />
            <p>{isActive ? "Activo" : "Inactivo"}</p>
            <hr />
            <p style={myStyle}>
                <pre>{JSON.stringify(dbzCharacter, null, 2)}</pre>
                <button className="button" onClick={toggleActive}>
                    Toggle Active
                </button>
            </p>
            <hr />
        </>
    );
};
