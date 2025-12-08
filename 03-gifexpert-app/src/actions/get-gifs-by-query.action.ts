import axios from "axios";

import { environments } from "../environments";
import type { GiphyResponseInterface } from "../interfaces/giphy.response";
import type { GifInterface } from "../interfaces";

export const getGifsByQuery = async (
    query: string
): Promise<GifInterface[]> => {
    const { url, api_key, limit, rating, lang } = environments;
    const response = await axios.get<GiphyResponseInterface>(url, {
        params: {
            q: query,
            api_key: api_key,
            limit: limit,
            rating: rating,
            lang: lang,
        },
    });

    console.warn("Giphy API Response:", response.data);
    return response.data.data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height),
    }));
};
