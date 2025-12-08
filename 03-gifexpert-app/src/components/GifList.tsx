import { mockGifs } from "../data";

export const GifList = () => {
    return (
        <>
            <div className="gifs-container">
                {mockGifs.map((gif) => (
                    <div key={gif.id} className="gif-card">
                        <img src={gif.url} alt={gif.title} />
                        <h3>{gif.title} </h3>
                        <p>
                            {gif.width} x {gif.height} (1.5mb)
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
};