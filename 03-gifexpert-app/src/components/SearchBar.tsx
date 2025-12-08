import { useState, useEffect } from "react";

interface Props {
    placeholder?: string;
    onQuery: (query: string) => void;
}

export const SearchBar = ({
    placeholder = "Buscar Gifs",
    onQuery,
}: Props) => {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        if (query.trim().length === 0) return;
        onQuery(query);
        setQuery("");
    };

    useEffect(() => {
      const timeOutId=  setTimeout(() => {
            onQuery(query);
        }, 700);


        return () => clearTimeout(timeOutId);

    },[query,onQuery]);

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    onKeyDown={(event) => {
                        if (event.key === "Enter") {
                            handleSearch();
                        }
                    }}
                />
                <button onClick={handleSearch}>Buscar</button>
            </div>
        </>
    );
};
