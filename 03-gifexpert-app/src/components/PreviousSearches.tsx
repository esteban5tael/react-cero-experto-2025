import type { PreviousSearchesInterface } from "../interfaces";


export const PreviousSearches = ({searches}:PreviousSearchesInterface) => {
    return (
        <>
            <div className="previous-searches">
                <h2>Busquedas Previas</h2>
                <ul className="previous-searches-list">
                    {
                        searches.map( (term) => (
                            <li key={term}>{term}</li>
                        ) )
                    }
                </ul>
            </div>
        </>
    );
};
