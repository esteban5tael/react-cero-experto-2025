import { heroApi } from "../api";

export const getHeroesByPageAction = async () => {
    await new Promise((resolve) => setTimeout(resolve, 0)); // Simular delay de 2 segundos
    const { data } = await heroApi.get("/");
    console.log(data);
    return data;
};
